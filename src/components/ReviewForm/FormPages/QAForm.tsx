import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useAppDispatch } from '@hooks/reduxHooks';
import { SkeletonLoader } from '@uiToolkit/commonComps/loaders';
import React, { useCallback, useEffect, useState } from 'react';
import { getQAForm, updateQuestionResponse } from 'services/performanceReview';
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

const QAQuestion = ({ question, submitAnswer }) => {
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
  const {
    state: { peerFeedback, selectedReviewInfo },
    showPeerFeedback,
    isManagerView,
    isSubmitClicked,
  } = useReview();

  const onSelectQuestion = () => {
    showPeerFeedback({
      questionId: question.id,
      answerType: question.answerType,
      answerOptions: question.answerOptions,
    });
  };

  return (
    <InteractionContainer
      key={id}
      isSelected={isManagerView && peerFeedback.questionId === id}
      onClick={isManagerView ? onSelectQuestion : null}
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', mb: 1.5 }}>
        <Box>
          <QuestionComp questionText={question.description} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {commonColumnsList.map(({ component, defaultProps = {} }, colIndex) => (
            <React.Fragment key={colIndex}>
              {component({
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
                    field,
                    answer,
                  });
                },
                isSubmitClicked,
                isSubmitted: selectedReviewInfo.isSubmitted === null || selectedReviewInfo.isSubmitted,
                ...defaultProps,
              })}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </InteractionContainer>
  );
};

export const QAForm = ({ reviewId, employeeId, providerId, isSummaryView = false, responseId, renderFooter }) => {
  const [loading, setLoading] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const { showPeerFeedback, isManagerView, forceUpdate } = useReview();

  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    setLoading(true);

    getQAForm({
      reviewId,
      employeeId,
      providerId,
      responseId,
    })
      .then((questions) => {
        setQuestionList(questions.map((question) => ({ ...question, loading: false })));
        try {
          showPeerFeedback({
            questionId: questions[0].id,
            answerType: questions[0].answerType,
            answerOptions: questions[0].answerOptions,
          });
        } catch (e) {}
      })
      .catch((err) => {
        console.log(err);
        // dispatch(showErrorSnackbar(err.message || 'Some Error Occured while fetching QA Form'));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch, employeeId, providerId, responseId, reviewId, showPeerFeedback]);

  const answerQuestion = useCallback(
    ({ questionId, field, answer }) => {
      let currentFeedBackText = '';
      let currentSelectedAnswerOptions = [];
      // loader added below
      setQuestionList((questions) => {
        if (Array.isArray(questions))
          return questions.map((question) => {
            if (question.id !== questionId) return question;

            currentFeedBackText = question.feedbackText;
            currentSelectedAnswerOptions = question.selectedAnswerOptions;

            return {
              ...question,
              loading: true,
            };
          });
        return null;
      });

      updateQuestionResponse({
        reviewId,
        employeeId,
        questionId,
        feedbackText: field === 'feedbackText' ? answer : currentFeedBackText,
        selectedAnswerOptions:
          field === 'rating' ? (Array.isArray(answer) ? answer : [answer]) : currentSelectedAnswerOptions,
      })
        .then((res) => {
          const { id: questionId, selectedAnswerOptions, feedbackText } = res?.question;
          setQuestionList((questions) => {
            if (Array.isArray(questions))
              return questions.map((question) => {
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

            return null;
          });
          // to update review fill stats: like how many are answered
          forceUpdate();
        })
        .catch((err) => {
          setQuestionList((questions) => {
            if (Array.isArray(questions))
              return questions.map((question) => {
                if (question.id !== questionId) return question;

                return {
                  ...question,
                  loading: false,
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

  useEffect(() => {
    fetchData();
  }, [reviewId, employeeId, providerId, responseId, fetchData]);

  if (loading) {
    return <Box sx={{ width: '100%' }}>{showLoader()}</Box>;
  }

  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={isManagerView ? 8 : 12} sx={{ overflowY: 'auto', height: '100%' }}>
        {questionList.map((question, index) => (
          <QAQuestion key={question.id} question={question} questionNo={index + 1} submitAnswer={answerQuestion} />
        ))}
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
