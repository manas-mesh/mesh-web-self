import React, { useCallback, useMemo } from 'react';
import { ScaleInput } from 'uiToolkit/ScaleInput';

export const ReviewScaleInput = ({
  answerOptions = [],
  selectedAnswerOptions = [],
  submitAnswer,
  disabled = false,
  isRequired = false,
  isSubmitClicked = false,
}) => {
  const value = selectedAnswerOptions?.[0]?.id;
  const startText = answerOptions[0]?.description;
  const endText = answerOptions[answerOptions.length - 1]?.description;

  const options = useMemo(
    () => answerOptions.map((option) => ({ label: option.score, value: option.id })),
    [answerOptions],
  );

  const onSelectionChange = useCallback(
    (selectedId) => {
      const selectedOption = answerOptions.filter((option) => option.id === selectedId);
      submitAnswer('rating', selectedOption);
    },
    [answerOptions, submitAnswer],
  );

  return (
    <ScaleInput
      value={value}
      isDisabled={disabled}
      onChange={onSelectionChange}
      options={options}
      startText={startText}
      endText={endText}
      isRequired={isRequired}
      enableValidation={isSubmitClicked}
      withBackground={false}
    />
  );
};
