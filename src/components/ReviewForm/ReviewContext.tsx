import useForceUpdate from 'hooks/useForceUpdate';
import { createContext, ReactNode, useCallback, useContext, useMemo, useReducer, useState } from 'react';

export interface CompetencyInfoI {
  isOpen: boolean;
  title: string | null;
  id: string | null;
  empId: string | null;
}

export interface PeerFeedbackI {
  goalId: string | null;
  competencyId: string | null;
  questionId: string | null;
  answerType: string | null;
}

export interface SelectedReviewInfoI {
  reviewId: string | null;
  employeeId: string | null;
  submissionStatus: string | null;
  isSubmitted: boolean;
  reviewProviderType: string | null; // can be 'SELF', 'MANAGER'
  reviewStage: string | null;
  reviewName: string | null;
  providerEmployeeId: string | null;
  employeeName: string | null;
  reviewCycleName: string | null;
  isPublished: boolean;
  isShowRatingPanel: boolean;
}

export interface ReviewI {
  competencyInfo: CompetencyInfoI | {};
  peerFeedback: PeerFeedbackI | {};
  selectedReviewInfo: SelectedReviewInfoI | {};
}

// creating a context for easy prop passing.

const defaultReview: ReviewI = {
  // helper objects to avoid prop drilling
  /*
    competencyInfo provides basic control and info for competency side panel
  */
  competencyInfo: {
    isOpen: false,
    title: '',
    id: '',
    empId: null,
  },
  /*
    peerFeedback is used to store and retrieve info about selected question 
    in manager view. 
      - questionId is unique for each question and is used to identify selected question.
      - answerType is used in peerFeedback comp to display peer's responses as per answerType
  */
  peerFeedback: {
    goalId: null,
    competencyId: null,
    questionId: null,
    answerType: null,
  },
  /*
    selectedReviewInfo is used to store and retrieve info about a particular review 
    - reviewId, employeeId is currently not being used in logic
    - submissionStatus is used to enable / disable form editing.
  */
  selectedReviewInfo: {
    reviewId: null,
    employeeId: null,
    submissionStatus: null,
    isSubmitted: false,
    reviewProviderType: null, // can be 'SELF', 'MANAGER'
    reviewStage: null,
    reviewName: null,
    providerEmployeeId: null,
    employeeName: null,
    reviewCycleName: null,
    isPublished: false,
    isShowRatingPanel: false,
  },
};

const competencyActions = {
  EXPAND_COMPETENCY_PANEL: 'EXPAND_COMPETENCY_PANEL',
  CLOSE_COMPETENCY_PANEL: 'CLOSE_COMPETENCY_PANEL',
};

const PeerFeedbackActions = {
  SET_SELECTED_QUESTION_ID: 'SET_SELECTED_QUESTION_ID',
  CLEAR_SELECTED_QUESTION_ID: 'CLEAR_SELECTED_QUESTION_ID',
};

const selectedReviewInfoActions = {
  SET_SELECTED_REVIEW_DETAILS: 'SET_SELECTED_REVIEW_DETAILS',
  SET_SELECTED_REVIEW_SUBMISSION_STATUS: 'SET_SELECTED_REVIEW_SUBMISSION_STATUS',
  CLEAR_SELECTED_REVIEW_DETAILS: 'CLEAR_SELECTED_REVIEW_DETAILS',
};

const competencyActionsReducer = (state: ReviewI, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case competencyActions.EXPAND_COMPETENCY_PANEL:
      return {
        ...state,
        competencyInfo: {
          isOpen: true,
          id: payload.id,
          title: payload.title,
          empId: payload.empId,
        },
      };
    case competencyActions.CLOSE_COMPETENCY_PANEL:
      return {
        ...state,
        competencyInfo: {
          isOpen: false,
          id: '',
          title: '',
        },
      };
    default:
      return { ...state };
  }
};

const PeerFeedbackActionsReducer = (state: ReviewI, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case PeerFeedbackActions.SET_SELECTED_QUESTION_ID:
      return {
        ...state,
        peerFeedback: {
          goalId: payload.goalId,
          competencyId: payload.competencyId,
          questionId: payload.questionId,
          answerType: payload.answerType,
          answerOptions: payload.answerOptions,
        },
      };
    case PeerFeedbackActions.CLEAR_SELECTED_QUESTION_ID:
      return {
        ...state,
        peerFeedback: {
          goalId: null,
          competencyId: null,
          questionId: null,
          answerType: null,
          answerOptions: null,
        },
      };
    default:
      return { ...state };
  }
};

const selectedReviewInfoActionsReducer = (state: ReviewI, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case selectedReviewInfoActions.SET_SELECTED_REVIEW_DETAILS:
      return {
        ...state,
        selectedReviewInfo: {
          reviewId: payload.reviewId,
          employeeId: payload.employeeId,
          submissionStatus: payload.submissionStatus,
          isSubmitted: payload.submissionStatus === 'SUBMITTED' || payload.submissionStatus === 'ACKNOWLEDGED',
          reviewProviderType: payload.reviewProviderType,
          reviewStage: payload.reviewStage,
          reviewName: payload.reviewName,
          providerEmployeeId: payload.providerEmployeeId,
          employeeName: payload.employeeName,
          reviewCycleName: payload.reviewCycleName,
          isPublished: payload.isPublished,
          isShowRatingPanel: payload.isShowRatingPanel ?? null,
        },
      };
    case selectedReviewInfoActions.CLEAR_SELECTED_REVIEW_DETAILS:
      return {
        ...state,
        selectedReviewInfo: {
          reviewId: null,
          employeeId: null,
          isSubmitted: null,
          submissionStatus: null,
          reviewProviderType: null,
          providerEmployeeId: null,
          employeeName: null,
          reviewCycleName: null,
          isPublished: null,
          isShowRatingPanel: null,
        },
      };
    case selectedReviewInfoActions.SET_SELECTED_REVIEW_SUBMISSION_STATUS:
      return {
        ...state,
        selectedReviewInfo: {
          ...state.selectedReviewInfo,
          submissionStatus: payload.submissionStatus,
          isSubmitted: payload.submissionStatus === 'SUBMITTED' || payload.submissionStatus === 'ACKNOWLEDGED',
        },
      };

    default:
      return state;
  }
};

const combinedReducer = (state: ReviewI, action: any) => {
  const { type } = action;

  if ((PeerFeedbackActions as any)[type]) {
    return PeerFeedbackActionsReducer(state, action);
  } else if ((competencyActions as any)[type]) {
    return competencyActionsReducer(state, action);
  } else {
    return selectedReviewInfoActionsReducer(state, action);
  }
};

export const ReviewContext = createContext<ReviewI>(defaultReview);
export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviewState, reviewDispatch] = useReducer(combinedReducer, defaultReview);
  // to keep track of if user has tried to submit at least once. Based on that we highlight error state for required question.
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [isManagerView, setIsManagerView] = useState(false);
  const [forceUpdateValue, forceUpdate] = useForceUpdate();

  // functions to update peerFeedback question id inside context.

  const showPeerFeedback = useCallback(({ goalId, competencyId, questionId, answerType, answerOptions = [] }: any) => {
    reviewDispatch({
      type: PeerFeedbackActions.SET_SELECTED_QUESTION_ID,
      payload: {
        goalId,
        competencyId,
        questionId,
        answerType,
        answerOptions,
      },
    });
  }, []);

  const clearPeerFeedback = useCallback(() => {
    reviewDispatch({
      type: PeerFeedbackActions.CLEAR_SELECTED_QUESTION_ID,
    });
  }, []);

  // functions to update selected Review details
  const setSelectedReviewDetails = useCallback(
    ({
      reviewId,
      employeeId,
      submissionStatus,
      reviewProviderType = 'SELF',
      reviewStage = 'NOT_PUBLISHED',
      reviewName,
      providerEmployeeId,
      employeeName,
      reviewCycleName,
      isPublished,
      isShowRatingPanel = null,
    }: any) => {
      reviewDispatch({
        type: selectedReviewInfoActions.SET_SELECTED_REVIEW_DETAILS,
        payload: {
          reviewId,
          employeeId,
          submissionStatus,
          reviewProviderType,
          reviewStage,
          reviewName,
          providerEmployeeId,
          employeeName,
          reviewCycleName,
          isPublished,
          isShowRatingPanel,
        },
      });
    },
    [],
  );

  // functions to update selected Review submissionStatus
  const setSelectedReviewSubmissionStatus = useCallback(({ submissionStatus }: { submissionStatus: string }) => {
    reviewDispatch({
      type: selectedReviewInfoActions.SET_SELECTED_REVIEW_SUBMISSION_STATUS,
      payload: {
        submissionStatus,
      },
    });
  }, []);

  const clearSelectedReviewDetails = useCallback(() => {
    reviewDispatch({
      type: selectedReviewInfoActions.CLEAR_SELECTED_REVIEW_DETAILS,
    });
  }, []);

  const memoizedContextValue = useMemo(
    () => ({
      state: reviewState,
      showPeerFeedback,
      clearPeerFeedback,
      setSelectedReviewDetails,
      setSelectedReviewSubmissionStatus,
      clearSelectedReviewDetails,
      isSubmitClicked,
      setIsSubmitClicked,
      isManagerView,
      setIsManagerView,
      forceUpdateValue,
      forceUpdate,
    }),
    [
      clearPeerFeedback,
      clearSelectedReviewDetails,
      forceUpdate,
      forceUpdateValue,
      isManagerView,
      isSubmitClicked,
      reviewState,
      setSelectedReviewDetails,
      setSelectedReviewSubmissionStatus,
      showPeerFeedback,
    ],
  );

  return <ReviewContext.Provider value={memoizedContextValue}>{children}</ReviewContext.Provider>;
};

// hook to access Review Context inside ReviewProvider.
export const useReview = () => useContext(ReviewContext);
