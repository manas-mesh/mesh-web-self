import React from 'react';
import Textarea from '@uiToolkit/Textarea';

interface FeedbackCompI {
  feedbackText: string;
  submitAnswer: () => void;
  loading: boolean;
  isSubmitted: boolean;
  enableFeedbackText: boolean;
  isRequired: boolean;
  isTextRequired: boolean;
  isSubmitClicked: boolean;
  isSectionEditable: boolean;
  placeholder?: string;
  rows: number;
  maxRows: number;
  minRows: number;
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
  maxRows,
  minRows,
}) => {
  if (!enableFeedbackText) return null;
  return (
    <Textarea
      label="Comments"
      disabled={isSubmitted || !isSectionEditable}
      defaultValue={feedbackText}
      placeholder={placeholder || `Please provide a basis for your assessment. If possible, with an example.`}
      onBlur={(e) => submitAnswer('feedbackText', e.target.value)}
      rows={rows}
      maxRows={maxRows}
      minRows={minRows}
      isRequired={isTextRequired}
      enableValidation={isSubmitClicked}
    />
  );
};
