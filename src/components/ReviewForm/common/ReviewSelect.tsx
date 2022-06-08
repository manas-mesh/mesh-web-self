import { useCallback, useMemo } from 'react';
import Select from 'uiToolkit/Select';

export const ReviewSelect = ({
  answerOptions,
  selectedAnswerOptions,
  submitAnswer = () => {},
  isSubmitted,
  isRequired,
  isSubmitClicked,
  isSectionEditable = true,
  onSelectQuestion = () => {},
}) => {
  let value = null;
  if (selectedAnswerOptions[0]) {
    value = { value: selectedAnswerOptions[0].id, label: selectedAnswerOptions[0].description };
  }
  const selectOptions = useMemo(
    () => answerOptions.map((option) => ({ label: option.description, value: option.id })),
    [answerOptions],
  );

  const onSelectionChange = useCallback(
    ({ label, value }) => {
      const selectedId = value;
      const selectedOption = answerOptions.filter((option) => option.id === selectedId);
      submitAnswer('rating', selectedOption);
    },
    [answerOptions, submitAnswer],
  );

  const labelText = 'Select';

  const validationErrorText = isSubmitClicked && isRequired && !value ? `${labelText} (Required)` : '';

  return (
    <Select
      options={selectOptions}
      handleChange={onSelectionChange}
      value={value}
      disabled={isSubmitted || !isSectionEditable}
      label={labelText}
      isRequired={isRequired}
      error={validationErrorText}
    />
  );
};
