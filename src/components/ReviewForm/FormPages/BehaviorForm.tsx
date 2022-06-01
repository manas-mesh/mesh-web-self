import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { useAppDispatch } from '@hooks/reduxHooks';
import { ThemeType } from '@themes/clients/baseTheme';
import { SkeletonLoader } from '@uiToolkit/commonComps/loaders';
import React, { useCallback, useEffect, useState } from 'react';
import { getBehaviorForm, updateQuestionResponse } from 'services/performanceReview';
// import { InfoOutlined } from '@material-ui/icons';
// import { openCompetencySidePanelAction } from 'actions/competencySidePanelActions';
import { InteractionContainer } from 'uiToolkit/InteractionContainer';

import { FeedbackComp, QuestionComp, ReviewInputComp } from '../common';
import { PeerFeedbackComp } from '../common/PeerFeedbackComp';
import { useReview } from '../ReviewContext';

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
      placeholder: `Describe feedback in STAR format
ST: situation/task - explain the situation or task so others understand the context.
A: action - give details about what you or another person did to handle the situation.
R: result - describe what was achieved by the action and why it was effective.`,
      minRows: 4,
      maxRows: 6,
    },
  },
];

const BehaviorQuestion = ({ tag, question, submitAnswer, employeeId }) => {
  const {
    id,
    answerOptions,
    selectedAnswerOptions,
    feedbackText,
    loading,
    answerType,
    enableFeedbackText,
    isRequired,
    minOptions,
    maxOptions,
    isTextRequired,
  } = question;

  const dispatch = useAppDispatch();
  const {
    state: { peerFeedback, selectedReviewInfo },
    showPeerFeedback,
    isManagerView,
    isSubmitClicked,
  } = useReview();

  const TooltipWithBehavior = (
    <Box display="flex" alignItems="center">
      {tag.displayName}
      {/* {tag?.description && <BehaviorInfo description={tag.description} />} */}
    </Box>
  );

  const onSelectQuestion = () => {
    if (peerFeedback.questionId && peerFeedback.questionId === question.id && peerFeedback.competencyId === tag.id)
      return;
    showPeerFeedback({
      competencyId: tag.id,
      questionId: question.id,
      answerType: question.answerType,
      answerOptions: question.answerOptions,
    });
  };

  return (
    <InteractionContainer
      key={question.id}
      onClick={isManagerView ? onSelectQuestion : null}
      isSelected={isManagerView && peerFeedback.questionId === question.id && peerFeedback.competencyId === tag.id}
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', mb: 1.5 }}>
        <Box>
          <QuestionComp questionText={question.description} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {commonColumnsList.map(({ width, component, defaultProps = {} }, colIndex) => (
            <React.Fragment key={colIndex}>
              {component({
                questionText: TooltipWithBehavior,
                answerOptions,
                selectedAnswerOptions,
                feedbackText,
                loading,
                answerType,
                enableFeedbackText,
                isRequired,
                minOptions,
                maxOptions,
                isTextRequired,
                submitAnswer: (field, answer) => {
                  submitAnswer({
                    questionId: id,
                    competencyId: tag.id,
                    field,
                    answer,
                  });
                },
                width,
                isSubmitClicked,
                isSubmitted: selectedReviewInfo.isSubmitted === null || selectedReviewInfo.isSubmitted,
                id: tag.id,
                showCompetencyDetailsPanel: (id, questionText) => {
                  dispatch({
                    /* openCompetencySidePanelAction({
                          tagId: id,
                          tagTitle: tag?.displayName || questionText,
                          employeeId,
                          tagDescription: tag.description || '',
                        }) */
                  });
                },
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

// Could be used to show competency specific header
// const BehaviorInfo = ({ description, displayName }) => {
//   return (
//     <Box display="flex" alignItems="center">
//       <StyledTypography leftGutter={2} variant="body1" weight={600}>
//         {displayName}
//       </StyledTypography>
//       <StyledTooltip title={<StyledTypography>{description}</StyledTypography>} component="span">
//         <FlexContainer>
//           <StyledIcon
//             leftGutter={1}
//             topGutter={0.5}
//             color="primary"
//             size="tiny"
//             rightGutter={-0.75}
//           >
//             <InfoOutlined />
//           </StyledIcon>
//         </FlexContainer>
//       </StyledTooltip>
//     </Box>
//   );
// };

export const BehaviorForm = ({ reviewId, employeeId, providerId, isSummaryView = false, responseId, renderFooter }) => {
  const [loading, setLoading] = useState(true);
  const [behaviors, setBehaviors] = useState([]);

  const { showPeerFeedback, isManagerView, forceUpdate } = useReview();
  const theme: ThemeType = useTheme();

  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    setLoading(true);

    getBehaviorForm({
      reviewId,
      employeeId,
      providerId,
      responseId,
    })
      .then((res) => {
        setBehaviors(
          res.map(({ tag, questions }) => ({
            tag,
            questions: questions.map((question) => ({ ...question, loading: false })),
          })),
        );
        try {
          showPeerFeedback({
            competencyId: res[0].tag.id,
            questionId: res[0].questions[0].id,
            answerType: res[0].questions[0].answerType,
            answerOptions: res[0].questions[0].answerOptions,
          });
        } catch (e) {}
      })
      .catch((err) => {
        // dispatch(
        //   showErrorSnackbar(err.message || 'Some Error Occured while fetching Behavior Form')
        // );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [employeeId, providerId, responseId, reviewId, showPeerFeedback]);

  const answerQuestion = useCallback(
    ({ competencyId, questionId, field, answer }) => {
      // send dummy API call here
      // add loader here.

      let currentFeedBackText = '';
      let currentSelectedAnswerOptions = [];

      setBehaviors((behaviors) => {
        if (Array.isArray(behaviors))
          return behaviors.map((behavior) => {
            const { tag, questions } = behavior;

            if (tag.id !== String(competencyId)) return behavior;

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
              tag,
              questions: mappedQuestions,
            };
          });
        return null;
      });

      updateQuestionResponse({
        reviewId,
        competencyId,
        employeeId,
        questionId,
        feedbackText: field === 'feedbackText' ? answer : currentFeedBackText,
        selectedAnswerOptions:
          field === 'rating' ? (Array.isArray(answer) ? answer : [answer]) : currentSelectedAnswerOptions,
      })
        .then((res) => {
          const { id: questionId, selectedAnswerOptions, feedbackText } = res?.question;
          setBehaviors((behaviors) => {
            if (Array.isArray(behaviors))
              return behaviors.map((behavior) => {
                const { tag, questions } = behavior;

                if (tag.id !== String(competencyId)) return behavior;

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
                  tag,
                  questions: mappedQuestions,
                };
              });
            return null;
          });
          // to update review fill stats: like how many are answered
          forceUpdate();
        })
        .catch((err) => {
          setBehaviors((behaviors) => {
            if (Array.isArray(behaviors))
              return behaviors.map((behavior) => {
                const { tag, questions } = behavior;

                if (tag.id !== String(competencyId)) return behavior;

                const mappedQuestions = questions.map((question) => {
                  if (question.id !== questionId) return question;

                  return {
                    ...question,
                    loading: false,
                  };
                });

                return {
                  tag,
                  questions: mappedQuestions,
                };
              });

            return null;
          });
          // dispatch(
          //   showErrorSnackbar(err.message || 'Some Error Occured while fetching Behavior Form')
          // );
        });
    },
    [employeeId, forceUpdate, reviewId],
  );

  const showLoader = () => (
    <Box>
      <SkeletonLoader skeletons={['100%', '100%']} />
    </Box>
  );

  //   const showNoBehaviorsMessage = () => (
  //     <DisplayInfo>
  //       <StyledTypography
  //         variant="h6"
  //         color="textSecondaryLight"
  //         align="center"
  //         topGutter={4}
  //         bottomGutter={4}
  //       >
  //         {REVIEW_TEXTS.CORE_COMPETENCIES.NO_DATA}
  //       </StyledTypography>
  //     </DisplayInfo>
  //   );

  //   const showErrorMessage = () => (
  //     <DisplayInfo>
  //       <StyledTypography variant="h6" color="red" align="center" topGutter={4} bottomGutter={4}>
  //         {REVIEW_TEXTS.CORE_COMPETENCIES.ERROR_MSG}
  //       </StyledTypography>
  //     </DisplayInfo>
  //   );

  useEffect(() => {
    fetchData();
  }, [reviewId, employeeId, providerId, responseId, fetchData]);

  if (loading) {
    return <Box sx={{ width: '100%' }}>{showLoader()}</Box>;
  }

  return (
    <Grid templateColumns="repeat(12, 1fr)" height="100%" width="100%">
      <GridItem colSpan={isManagerView ? 8 : 12} sx={{ overflowY: 'auto', height: '100%' }}>
        {behaviors.map(({ tag, questions }) =>
          questions.map((question) => (
            <BehaviorQuestion
              key={question.id}
              tag={tag}
              question={question}
              submitAnswer={answerQuestion}
              employeeId={employeeId}
            />
          )),
        )}
        {renderFooter()}
      </GridItem>
      {isManagerView && (
        <GridItem p={3} bg={theme.colors.surfaces.g94} colSpan={4} sx={{ height: '100%', overflowY: 'auto' }}>
          <PeerFeedbackComp reviewId={reviewId} employeeId={employeeId} />
        </GridItem>
      )}
    </Grid>
  );
};
