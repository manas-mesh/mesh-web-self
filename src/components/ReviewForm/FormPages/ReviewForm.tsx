import { Grid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { CUSTOM_NAV_BAR_COMP_KEYS } from 'layouts/NavBarLayout/NavBarCustomFeatureItems';
import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { selectLoggedInEmployeeData } from 'store/selectors/loggedInEmployee';
import { getUpdatedReviewForms, submitReview } from 'services/performanceReview';
// import { showErrorSnackbar, showSuccessSnackbar } from 'services/snackbar';
import { Checkbox } from 'uiToolkit/Checkbox';
import { Button } from 'uiToolkit/Button';
import { TextBodyMedium } from 'uiToolkit/Typography';

import { useReview } from '../ReviewContext';
import { BehaviorForm } from './BehaviorForm';
import { GoalForm } from './GoalForm';
import { QAForm } from './QAForm';
import { REVIEW_FORMS_TYPE_MAP } from '@constants/reviewConstants';
import { ROUTES } from '@constants/routes';
import { useRouter } from 'next/router';
import { addNavBarCustomItem, removeNavBarCustomItem } from 'store/reduxFeatures/navBarCustomItem-slice';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { ArrowLeft, ArrowRight } from '@assets/iconComponents';
import { ThemeType } from '@themes/clients/baseTheme';
import { useTheme } from '@emotion/react';

export const REVIEW_STAGE_COMPONENT_MAP = {
  [REVIEW_FORMS_TYPE_MAP.GOAL]: {
    id: REVIEW_FORMS_TYPE_MAP.GOAL,
    title: 'Goals',
    component: ({
      employeeId,
      reviewId,
      loggedInEmployeeId,
      availableReviewForms,
      isShowGoalRating,
      isShowGoalWeightage,
      isSectionEditable = true,
      renderFooter,
    }) => (
      <GoalForm
        employeeId={employeeId}
        providerId={loggedInEmployeeId}
        reviewId={reviewId}
        availableReviewForms={availableReviewForms}
        isShowGoalWeightage={isShowGoalWeightage}
        isShowGoalRating={isShowGoalRating}
        isSectionEditable={isSectionEditable}
        renderFooter={renderFooter}
      />
    ),
  },
  [REVIEW_FORMS_TYPE_MAP.COMPETENCY]: {
    id: REVIEW_FORMS_TYPE_MAP.COMPETENCY,
    title: 'Competency',
    component: ({ employeeId, reviewId, loggedInEmployeeId, renderFooter }) => (
      <BehaviorForm
        employeeId={employeeId}
        providerId={loggedInEmployeeId}
        reviewId={reviewId}
        renderFooter={renderFooter}
      />
    ),
  },
  [REVIEW_FORMS_TYPE_MAP.QNA]: {
    id: REVIEW_FORMS_TYPE_MAP.QNA,
    title: 'Overall Questions',
    component: ({ employeeId, reviewId, loggedInEmployeeId, renderFooter }) => (
      <QAForm employeeId={employeeId} providerId={loggedInEmployeeId} reviewId={reviewId} renderFooter={renderFooter} />
    ),
  },
};

export const ReviewProgressStages = ({ selectForm, selectedForm, reviewForms, showErrorMessage }) => (
  <Grid justify="center" alignItems="center">
    {reviewForms.map((form, index) => {
      const { formName, status, unansweredQuestions } = form;
      const { id, title } = REVIEW_STAGE_COMPONENT_MAP[formName];
      return (
        <React.Fragment key={id}>
          <Box key={id} style={{ position: 'relative' }}>
            <Button onClick={() => selectForm(form)}>{title}</Button>
            {showErrorMessage && unansweredQuestions !== 0 && (
              <TextBodyMedium>{`${unansweredQuestions} questions are pending`}</TextBodyMedium>
            )}
          </Box>
        </React.Fragment>
      );
    })}
  </Grid>
);

const FormFooter = ({
  handleBackClick,
  handleSubmitClick,
  sendingResponse,
  selectedForm,
  finalForm,
  selectedReviewInfo,
  reviewForms,
}) => {
  const [confirmSubmission, setConfirmSubmission] = useState(false);
  const isFinalForm = selectedForm.formName === finalForm.formName;
  const selectedFormIndex = reviewForms.findIndex(({ formName }) => formName === selectedForm.formName);
  const prevFormName = selectedFormIndex < 1 ? '' : reviewForms[selectedFormIndex - 1].formName;
  const nextFormName = isFinalForm ? '' : reviewForms[selectedFormIndex + 1].formName;

  const isSubmissionDisabled =
    isFinalForm && (selectedReviewInfo.isSubmitted === null || selectedReviewInfo.isSubmitted || !confirmSubmission);

  const prevButtonText =
    selectedFormIndex === 0 ? 'Back to Reviews' : 'Back to ' + REVIEW_STAGE_COMPONENT_MAP[prevFormName].title;
  const nextButtonText = isFinalForm ? 'Submit' : REVIEW_STAGE_COMPONENT_MAP[nextFormName].title;

  return (
    <Box sx={{ py: 1.5 }}>
      {isFinalForm && (
        <Box sx={{ px: 3, py: 1.5, mb: 1.5 }}>
          <Checkbox
            options={{
              label: 'I agree that I want to submit this form and will not be able to edit it later on',
              uid: '1',
            }}
            // doesn't matter as it is just toggle, keeping it to silence TS as per component api
            value="val"
            onChange={() => {
              setConfirmSubmission((prev) => !prev);
            }}
          />
        </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={handleBackClick} StartIcon={ArrowLeft}>
          {prevButtonText}
        </Button>

        <Button
          onClick={handleSubmitClick}
          disabled={isSubmissionDisabled || sendingResponse}
          EndIcon={!isFinalForm ? ArrowRight : undefined}
        >
          {nextButtonText}
        </Button>
      </Box>
    </Box>
  );
};

export const ReviewForm = ({
  reviewId,
  employeeId,
  availableReviewForms,
  isShowGoalWeightage,
  isShowGoalRating,
  autoNavigate,
  setAutoNavigate,
  isSectionEditable,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const navigate = router.push;

  const {
    state: { selectedReviewInfo },
    clearPeerFeedback,
    setSelectedReviewSubmissionStatus,
    isSubmitClicked,
    setIsSubmitClicked,
    forceUpdateValue,
    forceUpdate,
  } = useReview();

  const { id: loggedInEmployeeId } = useAppSelector(selectLoggedInEmployeeData, shallowEqual);

  const [reviewForms, setReviewForms] = useState(availableReviewForms);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [sendingResponse, setSendingResponse] = useState(false);
  const [selectedForm, setSelectedForm] = useState(reviewForms[0]);
  const theme: ThemeType = useTheme();

  const selectForm = useCallback((form) => {
    setSelectedForm(form);
  }, []);

  const finalForm = reviewForms[reviewForms.length - 1];

  useEffect(() => {
    dispatch(
      addNavBarCustomItem({
        key: CUSTOM_NAV_BAR_COMP_KEYS.REVIEW_FILLING,
        itemData: {
          reviewForms,
          selectedForm,
          selectForm,
          selectedReviewInfo,
        },
      }),
    );
    return () => {
      dispatch(
        removeNavBarCustomItem({
          key: CUSTOM_NAV_BAR_COMP_KEYS.REVIEW_FILLING,
        }),
      );
    };
  }, [dispatch, reviewForms, selectForm, selectedForm, selectedForm.unansweredQuestions, selectedReviewInfo]);

  const submitReviewForms = () => {
    setSendingResponse(true);
    submitReview({
      reviewId,
      employeeId,
    })
      .then((res) => {
        const { reviewForms, review, message } = res;
        if (review.submissionStatus === 'SUBMITTED') {
          // dispatch(showSuccessSnackbar(message, 2000));
          setSelectedReviewSubmissionStatus({
            submissionStatus: 'SUBMITTED',
          });
        } else {
          setReviewForms(reviewForms);
          forceUpdate();
          setShowErrorMessage(true);
          setIsSubmitClicked(true);
          throw new Error(message);
        }
      })
      .catch((err) => {
        // console.log(err);
        // dispatch(showErrorSnackbar(err.message || 'Form submission failed.'));
      })
      .finally(() => {
        setSendingResponse(false);
      });
  };

  useEffect(() => {
    setIsSubmitClicked(false);
  }, [reviewId, setIsSubmitClicked]);

  useEffect(() => {
    setShowErrorMessage(false);

    getUpdatedReviewForms({
      reviewId,
      employeeId,
    })
      .then((reviewForms) => {
        setReviewForms(reviewForms);
      })
      .catch((err) => {
        console.log('Some error occurred while fetching updated state of reviewForms');
        console.log(err);
      });
  }, [clearPeerFeedback, employeeId, reviewId, selectedForm, forceUpdateValue]);

  useEffect(() => {
    clearPeerFeedback();
  }, [clearPeerFeedback, employeeId, reviewId, selectedForm]);

  const handleBackClick = () => {
    const currentFormIndex = reviewForms.map((form) => form.formName).indexOf(selectedForm.formName);
    if (currentFormIndex === 0) {
      navigate(ROUTES.performanceReview.index);
    } else {
      setSelectedForm(reviewForms[currentFormIndex - 1]);
    }
  };

  const handleSubmitClick = () => {
    if (selectedForm.formName === finalForm.formName) {
      submitReviewForms();
    } else {
      setSelectedForm((currentForm) => {
        const currentIndex = reviewForms.map((form) => form.formName).indexOf(currentForm.formName);
        return reviewForms[currentIndex + 1];
      });
    }
  };

  const renderFooter = () => (
    <FormFooter
      handleBackClick={handleBackClick}
      handleSubmitClick={handleSubmitClick}
      selectedReviewInfo={selectedReviewInfo}
      sendingResponse={sendingResponse}
      selectedForm={selectedForm}
      finalForm={finalForm}
      reviewForms={reviewForms}
    />
  );

  return (
    <Box sx={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <Grid bg={theme.colors.surfaces.g98} sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {REVIEW_STAGE_COMPONENT_MAP[selectedForm.formName].component({
          employeeId,
          reviewId,
          loggedInEmployeeId,
          availableReviewForms,
          isSubmitClicked,
          isShowGoalWeightage,
          isShowGoalRating,
          isSectionEditable,
          renderFooter,
        })}
      </Grid>
    </Box>
  );
};
