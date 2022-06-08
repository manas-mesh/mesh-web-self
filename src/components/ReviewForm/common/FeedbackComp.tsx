import React from 'react';
import Textarea from '@uiToolkit/Textarea';

interface FeedbackCompI {
  feedbackText: string;
  submitAnswer: (key: string, value: string) => void;
  loading: boolean;
  isSubmitted: boolean;
  enableFeedbackText: boolean;
  isRequired: boolean;
  isTextRequired: boolean;
  isSubmitClicked: boolean;
  isSectionEditable: boolean;
  placeholder?: string;
  rows: number;
}

export const FeedbackComp: React.FC<FeedbackCompI> = ({
  feedbackText = '',
  submitAnswer,
  loading,
  isSubmitted,
  enableFeedbackText,
  isRequired,
  isTextRequired,
  isSubmitClicked,
  isSectionEditable = true,
  placeholder = null,
  rows,
}) => {
  const labelText = 'Comments';

  if (!enableFeedbackText) return null;
  const validationErrorText = isSubmitClicked && isTextRequired && !feedbackText ? `${labelText} (Required)` : '';

  return (
    <Textarea
      label="Comments"
      name="feedback-text-section"
      isDisabled={isSubmitted || !isSectionEditable}
      defaultValue={feedbackText}
      placeholder={placeholder || `Please provide a basis for your assessment. If possible, with an example.`}
      onBlur={(e) => submitAnswer('feedbackText', e.target.value)}
      rows={rows}
      isRequired={isTextRequired}
      error={validationErrorText}
      // name={'comments-feedback'}
    />
  );
};
