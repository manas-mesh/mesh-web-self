import { Box } from '@chakra-ui/react';
import { SkeletonLoader } from '@uiToolkit/commonComps/loaders';
import { ReviewProvider } from 'components/ReviewForm';
import { ReviewForm } from 'components/ReviewForm/FormPages';
import { useReview } from 'components/ReviewForm/ReviewContext';
import useAsync from 'hooks/useAsync';
// import { GoalsWeightProvider } from 'components/GoalsWeight/GoalsWeightContext';
// import GoalsWeightSidepanel from 'components/GoalsWeight/GoalsWeightSidepanel';
import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { selectLoggedInEmployeeData } from 'store/selectors/loggedInEmployee';
import { getSummaryStats } from 'services/performanceReview';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { ThemeType } from '@themes/clients/baseTheme';
import { useTheme } from '@emotion/react';
// import { showErrorSnackbar } from 'services/snackbar';

const ReviewFormPage: React.FC = () => {
  const { query } = useRouter();

  const { employeeId, reviewId, ...searchParams } = query;

  const loggedInEmployee = useAppSelector(selectLoggedInEmployeeData, shallowEqual);

  const providerId = searchParams.provider || loggedInEmployee?.id;

  const [reviewForms, setReviewForms] = useState(null);
  const [stats, setStats] = useState(null);
  const [reviewSettings, setReviewSettings] = useState(() => ({
    isShowGoalWeightage: false,
    isShowGoalRating: false,
    isSectionEditable: true,
  }));
  const { isLoading, isIdle, run } = useAsync();
  const dispatch = useAppDispatch();
  const theme: ThemeType = useTheme();

  const {
    state: { selectedReviewInfo },
    setSelectedReviewDetails,
    setIsManagerView,
  } = useReview();

  const fetchData = useCallback(
    () =>
      getSummaryStats({
        employeeId,
        reviewId,
        providerId,
      })
        .then((res: any) => {
          setReviewSettings({
            isShowGoalWeightage: res.isShowGoalWeightage,
            isShowGoalRating: res.isShowGoalRating,
            isSectionEditable: res.isGoalSectionEditable,
          });
          const statObject = {
            startDate: res.startDate,
            endDate: res.endDate,
            goalSummaryStats: res.goalSummaryStats,
            taskStats: res.taskStats,
            recognitionStats: res.recognitionStats,
            strengthStats: res.meshStrengthStats,
            reviewStats: {
              title: res.review.feedbackForm.name,
              employee: res.employee,
            },
            oneOnOneAccordionStats: res.oneOnOneAccordionStats,
          };
          setStats(statObject);
          setSelectedReviewDetails({
            reviewId,
            employeeId,
            submissionStatus: res.review.submissionStatus,
            reviewProviderType: res.review.providerType,
            reviewStage: res.review.feedbackForm.currentStage,
            isPublished: res.review.isPublished,
            reviewName: res.review.feedbackForm.name,
            providerEmployeeId: res.review.providerEmployeeId,
            employeeName: res.employee.displayName,
            reviewCycleName: res.review.feedbackForm.reviewCycle ? res.review.feedbackForm.reviewCycle.name : '',
            isShowRatingPanel: res?.isShowRatingPanel,
          });
          setReviewForms(res.reviewForms);
          setIsManagerView(res.isSidebarEnabled);
        })
        .catch((err: Error) => {
          //   dispatch(showErrorSnackbar(err.message || 'stats fetch request failed'));
        }),
    [dispatch, employeeId, providerId, reviewId, setIsManagerView, setSelectedReviewDetails],
  );

  useEffect(() => {
    run(fetchData());
  }, [fetchData, run]);

  return (
    <Box bg={theme.colors.surfaces.g92} sx={{ height: '100%' }}>
      {/* <GoalsWeightProvider> */}

      {isLoading || reviewForms === null ? (
        <SkeletonLoader />
      ) : (
        <ReviewForm
          employeeId={employeeId}
          reviewId={reviewId}
          availableReviewForms={reviewForms}
          {...reviewSettings}
        />
      )}
      {/* <GoalsWeightSidepanel /> */}
      {/* </GoalsWeightProvider> */}
    </Box>
  );
};

const ReviewFormPageWithContext = () => (
  <ReviewProvider>
    <ReviewFormPage />
  </ReviewProvider>
);

export default ReviewFormPageWithContext;
