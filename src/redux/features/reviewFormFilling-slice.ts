import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PeerFeedbackI {
  goalId: string | null;
  competencyId: string | null;
  questionId: string | null;
  answerType: string | null;
  answerOptions: any[];
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

interface ReviewStateI {
  peerFeedback: PeerFeedbackI;
  selectedReviewInfo: SelectedReviewInfoI;
}

interface ReviewFormI {
  reviewState: ReviewStateI;
  isSubmitClicked: boolean;
  isManagerView: boolean;
  forceUpdateValue: number;
}

const initialReviewState = {
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
    answerOptions: [],
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

const initialState: ReviewFormI = {
  reviewState: initialReviewState,
  isSubmitClicked: false,
  isManagerView: false,
  forceUpdateValue: 0,
};

const reviewFormFilling = createSlice({
  name: 'reviewFormFilling',
  initialState,
  reducers: {
    showPeerFeedback(state, action) {
      state.reviewState.peerFeedback = {
        goalId: action.payload.goalId,
        competencyId: action.payload.competencyId,
        questionId: action.payload.questionId,
        answerType: action.payload.answerType,
        answerOptions: action.payload.answerOptions,
      };
    },
    clearPeerFeedback(state) {
      state.reviewState.peerFeedback = initialReviewState.peerFeedback;
    },
    setSelectedReviewDetails(state, action) {},
    setSelectedReviewSubmissionStatus(state, action) {
      state.reviewState.selectedReviewInfo.submissionStatus = action.payload.submissionStatus;
      state.reviewState.selectedReviewInfo.isSubmitted =
        action.payload.submissionStatus === 'SUBMITTED' || action.payload.submissionStatus === 'ACKNOWLEDGED';
    },

    setIsSubmitClicked(state, action) {
      state.isSubmitClicked = action.payload;
    },
    forceUpdate(state) {
      state.forceUpdateValue++;
    },
    setIsManagerView(state, action) {
      state.isManagerView = action.payload;
    },
    resetReviewFormFilling(state) {
      state = initialState;
    },
  },
});

export const {
  showPeerFeedback,
  clearPeerFeedback,
  setSelectedReviewDetails,
  setIsManagerView,
  setIsSubmitClicked,
  setSelectedReviewSubmissionStatus,
  forceUpdate,
  resetReviewFormFilling,
} = reviewFormFilling.actions;

export default reviewFormFilling.reducer;
