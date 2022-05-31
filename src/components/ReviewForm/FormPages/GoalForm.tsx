import { Grid, GridItem } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { SkeletonLoader } from '@uiToolkit/commonComps/loaders';
import { getTaskDetailsRoute } from 'constants/helpers';
import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getGoalForm, updateQuestionResponse } from 'services/performanceReview';
import { InteractionContainer } from 'uiToolkit/InteractionContainer';
import { TextBodyMedium } from 'uiToolkit/Typography';

import { FeedbackComp, QuestionComp, ReviewInputComp } from '../common';
import { PeerFeedbackComp } from '../common/PeerFeedbackComp';
import { useReview } from '../ReviewContext';
import { useAppDispatch } from '@hooks/reduxHooks';

const commonColumnsList = [
  {
    // "rating" here means the column with user input. it could be any type
    id: 'rating',
    component: ReviewInputComp,
  },
  {
    id: 'feedback',
    component: FeedbackComp,
    defaultProps: {
      minRows: 4,
      maxRows: 6,
    },
  },
];

// const columnsList = {
//   // not used yet, will be done later with goal specific questions
//   // goalsView: [
//   //   {
//   //     id: 'name',
//   //     title: 'Goal',
//   //     component: GoalNameWeightage,
//   //   },
//   //   {
//   //     id: 'goalProgress',
//   //     title: 'Progress',
//   //     component: ({ goal }) => {
//   //       return (
//   //         <>
//   //           {/* <GoalProgressBar goal={goal} /> */}
//   //           <TextBodyMedium
//   //           // variant="body2" display="inline"
//   //           >
//   //             {Number(goal.getGoalProgress(0) || 0) + '%'}
//   //           </TextBodyMedium>
//   //         </>
//   //       );
//   //     },
//   //   },
//   //   ...commonColumnsList,
//   // ],
//   questionsView: [
//     {
//       id: 'name',
//       title: 'Question',
//       component: QuestionComp,
//     },
//     ...commonColumnsList,
//   ],
// };

const GoalQuestion = ({
  goal,
  question,
  submitAnswer,
  columnsView,
  isShowGoalWeightage,
  refreshData,
  isSectionEditable = true,
}) => {
  const {
    id,
    answerOptions,
    selectedAnswerOptions,
    feedbackText,
    loading,
    answerType,
    enableFeedbackText,
    description,
    isRequired,
    isTextRequired,
    minOptions,
    maxOptions,
  } = question;
  const {
    state: { peerFeedback, selectedReviewInfo },
    showPeerFeedback,
    isManagerView,
    isSubmitClicked,
  }: any = useReview();

  //   const { showSidePanel, hideSidePanel } = useGoalsWeight();
  const router = useRouter();
  const { pathname, query } = router;
  const { employeeId } = router.query;

  const goToTaskDetails = (e: any, { taskId, type }: any) => {
    e.stopPropagation();
    const route = getTaskDetailsRoute({
      locationPathname: pathname,
      locationQuery: query,
      ids: [taskId],
      employee: { id: employeeId },
      type,
    });
    router.push(route);
  };

  //   const onSuccess = (editedGoals) => {
  //     refreshData();
  //     hideSidePanel();
  //   };

  //   const onCancel = () => {
  //     hideSidePanel();
  //   };

  //   const openWeightagePanel = () => {
  //     showSidePanel({
  //       onSuccess,
  //       onCancel,
  //       employeeId,
  //       canEdit: true,
  //     });
  //   };

  const onSelectQuestion = () => {
    if (peerFeedback.questionId && peerFeedback.questionId === id && (!goal || peerFeedback.goalId === goal.id)) return;
    showPeerFeedback({
      goalId: goal ? goal.id : null,
      questionId: id,
      answerType: answerType,
      answerOptions: answerOptions,
    });
  };

  return (
    <InteractionContainer
      isSelected={isManagerView && peerFeedback.questionId === id && (!goal || peerFeedback.goalId === goal.id)}
      onClick={isManagerView ? onSelectQuestion : null}
    >
      <Box
        key={id}
        sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', mb: 1.5 }}
        // this selection thing is to be implemented
      >
        <Box>
          <QuestionComp questionText={description} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {commonColumnsList.map(({ component, defaultProps = {} }, colIndex) => (
            <React.Fragment key={colIndex}>
              {component({
                goalName: goal ? goal.text : null,
                goal: goal,
                answerOptions,
                selectedAnswerOptions,
                feedbackText,
                loading,
                answerType,
                enableFeedbackText,
                isRequired,
                isTextRequired,
                minOptions,
                maxOptions,
                questionText: description,
                submitAnswer: (field, answer) => {
                  submitAnswer({
                    questionId: id,
                    goalId: goal ? goal.id : null,
                    field,
                    answer,
                  });
                },
                isSubmitClicked,
                isSubmitted: selectedReviewInfo.isSubmitted === null || selectedReviewInfo.isSubmitted,
                goToTaskDetails: goToTaskDetails,
                // openWeightagePanel: openWeightagePanel,
                openWeightagePanel: () => {},
                employeeId,
                isShowGoalWeightage,
                isSectionEditable,
                onSelectQuestion,
                ...defaultProps,
              })}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </InteractionContainer>
  );
};

const VIEW_TYPES = {
  goalsView: 'goalsView',
  questionsView: 'questionsView',
};

export const GoalForm = ({
  reviewId,
  employeeId,
  providerId,
  isSummaryView = false,
  availableReviewForms,
  isShowGoalRating,
  isShowGoalWeightage,
  isSectionEditable,
  responseId,
  renderFooter,
}) => {
  const [loading, setLoading] = useState(false);
  const [goals, setGoals] = useState([]);
  // only implementing 'questions view' for now as goals are not there yet
  const [columnsView, setColumnsView] = useState(VIEW_TYPES.questionsView);
  const [goalRating, setGoalRating] = useState(null);
  const { showPeerFeedback, isManagerView, forceUpdate } = useReview();

  // const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    setLoading(true);

    getGoalForm({
      reviewId,
      employeeId,
      providerId,
      responseId,
    })
      .then((res) => {
        setGoalRating({
          averageGoalRating: res.averageGoalRating,
          maxGoalRating: res.maxGoalRating,
        });
        setGoals(
          res.goalQuestions.map(({ goal, questions }) => ({
            goal,
            questions: questions.map((question) => ({ ...question, loading: false })),
          })),
        );
        setColumnsView(
          res.goalQuestions.filter((r) => r.goal).length === 0 ? VIEW_TYPES.questionsView : VIEW_TYPES.goalsView,
        );
        try {
          showPeerFeedback({
            goalId: res.goalQuestions[0].goal.id,
            questionId: res.goalQuestions[0].questions[0].id,
            answerType: res.goalQuestions[0].questions[0].answerType,
            answerOptions: res.goalQuestions[0].questions[0].answerOptions,
          });
        } catch (e) {}
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [employeeId, providerId, responseId, reviewId, showPeerFeedback]);

  const answerQuestion = useCallback(
    ({ goalId, questionId, field, answer }) => {
      let currentFeedBackText = '';
      let currentSelectedAnswerOptions = [];

      setGoals((goals) => {
        if (Array.isArray(goals))
          return goals.map((g) => {
            const { goal, questions } = g;

            if (goal && goal.id !== String(goalId)) return g;

            const mappedQuestions = questions.map((question) => {
              if (question.id !== questionId) return question;

              currentFeedBackText = question.feedbackText;
              currentSelectedAnswerOptions = question.selectedAnswerOptions;

              return {
                ...question,
                loading: true,
              };
            });

            return {
              goal,
              questions: mappedQuestions,
            };
          });

        return null;
      });

      updateQuestionResponse({
        reviewId,
        goalId,
        employeeId,
        questionId,
        feedbackText: field === 'feedbackText' ? answer : currentFeedBackText,
        selectedAnswerOptions:
          field === 'rating' ? (Array.isArray(answer) ? answer : [answer]) : currentSelectedAnswerOptions,
      })
        .then((entity) => {
          const { id: questionId, selectedAnswerOptions, feedbackText } = entity?.question;
          setGoalRating({
            averageGoalRating: entity.averageRating,
            maxGoalRating: entity.maxRating,
          });
          setGoals((goals) => {
            if (Array.isArray(goals))
              return goals.map((g) => {
                const { goal, questions } = g;

                if (goal && goal.id !== String(goalId)) return g;

                const mappedQuestions = questions.map((question) => {
                  if (question.id !== questionId) return question;

                  if (field === 'rating' || field === 'feedbackText') {
                    return {
                      ...question,
                      loading: false,
                      selectedAnswerOptions: Array.isArray(selectedAnswerOptions)
                        ? selectedAnswerOptions
                        : [selectedAnswerOptions],
                      feedbackText,
                    };
                  }

                  return question;
                });

                return {
                  goal,
                  questions: mappedQuestions,
                };
              });
            return null;
          });
          // to update review fill stats: like how many are answered
          forceUpdate();
        })
        .catch((err) => {
          setGoals((goals) => {
            if (Array.isArray(goals))
              return goals.map((g) => {
                const { goal, questions } = g;

                if (goal && goal.id !== String(goalId)) return g;

                const mappedQuestions = questions.map((question) => {
                  if (question.id !== questionId) return question;

                  return {
                    ...question,
                    loading: false,
                  };
                });

                return {
                  goal,
                  questions: mappedQuestions,
                };
              });
            return null;
          });
          // dispatch(showErrorSnackbar(err.message || 'Some Error ocurred while fetching Goal Form'));
        });
    },
    [employeeId, forceUpdate, reviewId],
  );

  const showLoader = () => (
    <Box>
      <SkeletonLoader skeletons={['100%', '100%']} />
    </Box>
  );

  useEffect(() => {
    fetchData();
  }, [reviewId, employeeId, providerId, responseId, fetchData]);

  if (loading) {
    return <Box sx={{ width: '100%' }}>{showLoader()}</Box>;
  }

  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={isManagerView ? 8 : 12} sx={{ overflowY: 'auto', height: '100%', p: 1.5 }}>
        {goals.map(({ goal, questions }) =>
          questions.map((question) => (
            <GoalQuestion
              // there will always be one question only in questions array
              key={question.id}
              goal={goal}
              question={question}
              submitAnswer={answerQuestion}
              columnsView={columnsView}
              isShowGoalWeightage={isShowGoalWeightage}
              refreshData={fetchData}
              isSectionEditable={isSectionEditable}
            />
          )),
        )}
        {isShowGoalRating && (
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem colSpan={1}>
              <TextBodyMedium>Overall goal score</TextBodyMedium>
            </GridItem>
            <GridItem colSpan={1}>
              <TextBodyMedium>
                {goalRating?.averageGoalRating !== undefined ? goalRating.averageGoalRating : 'NA'}
              </TextBodyMedium>
            </GridItem>
          </Grid>
        )}
        {renderFooter()}
      </GridItem>
      {isManagerView && (
        <GridItem colSpan={4} sx={{ height: '100%', overflowY: 'auto', p: 1.5, bgcolor: 'surfaces.g94' }}>
          <PeerFeedbackComp reviewId={reviewId} employeeId={employeeId} />
        </GridItem>
      )}
    </Grid>
  );
};
