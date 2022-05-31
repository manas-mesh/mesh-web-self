import { REVIEW_ANSWER_TYPE_MAP } from 'constants/reviewConstants';
import React from 'react';
import { TextBodyMedium } from 'uiToolkit/Typography';

import { ReviewMultiSelect, ReviewScaleInput } from '.';
import { ReviewSelect } from './ReviewSelect';
import { ReviewStarRating } from './ReviewStarRating';

export const ReviewInputComp = ({
  answerOptions,
  selectedAnswerOptions,
  submitAnswer,
  loading,
  answerType,
  isSubmitted,
  isRequired,
  minOptions,
  maxOptions,
  isSubmitClicked,
  isSectionEditable = true,
  onSelectQuestion,
}) => {
  const getAnswerComponent = () => {
    switch (answerType) {
      case REVIEW_ANSWER_TYPE_MAP.MULTI_SELECT:
        return !isSectionEditable ? (
          <div>
            <TextBodyMedium>
              {selectedAnswerOptions?.length ? selectedAnswerOptions.map((ans) => ans.description).join(', ') : '-'}
            </TextBodyMedium>
          </div>
        ) : (
          <ReviewMultiSelect
            answerOptions={answerOptions}
            selectedAnswerOptions={selectedAnswerOptions}
            submitAnswer={submitAnswer}
            loading={loading}
            answerType={answerType}
            isSubmitted={isSubmitted}
            isRequired={isRequired}
            isSubmitClicked={isSubmitClicked}
            minOptions={minOptions}
            maxOptions={maxOptions}
            disabled={!isSectionEditable}
          />
        );
      case REVIEW_ANSWER_TYPE_MAP.DROP_DOWN:
        return (
          <ReviewSelect
            answerOptions={answerOptions}
            selectedAnswerOptions={selectedAnswerOptions}
            submitAnswer={submitAnswer}
            isSubmitted={isSubmitted}
            isRequired={isRequired}
            isSubmitClicked={isSubmitClicked}
            isSectionEditable={isSectionEditable}
            onSelectQuestion={onSelectQuestion}
          />
        );

      case REVIEW_ANSWER_TYPE_MAP.STAR_RATING:
        return (
          <ReviewStarRating
            answerOptions={answerOptions}
            selectedAnswerOptions={selectedAnswerOptions}
            disabled={isSubmitted || !isSectionEditable}
            submitAnswer={submitAnswer}
            isSubmitClicked={isSubmitClicked}
            isRequired={isRequired}
          />
        );

      case REVIEW_ANSWER_TYPE_MAP.NUMBER_RATING: {
        return (
          <ReviewScaleInput
            answerOptions={answerOptions}
            selectedAnswerOptions={selectedAnswerOptions}
            disabled={isSubmitted || !isSectionEditable}
            submitAnswer={submitAnswer}
            isSubmitClicked={isSubmitClicked}
            isRequired={isRequired}
          />
        );
      }
      default:
        return null;
    }
  };

  return <>{getAnswerComponent()}</>;
};
