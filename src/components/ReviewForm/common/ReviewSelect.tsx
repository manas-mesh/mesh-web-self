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
  const value = selectedAnswerOptions?.[0]?.id ?? '';
  const selectOptions = useMemo(
    () => answerOptions.map((option) => ({ label: option.description, value: option.id })),
    [answerOptions],
  );

  const onSelectionChange = useCallback(
    (e) => {
      const selectedId = e.target.value;
      const selectedOption = answerOptions.filter((option) => option.id === selectedId);
      submitAnswer('rating', selectedOption);
    },
    [answerOptions, submitAnswer],
  );

  return (
    <Select
      options={selectOptions}
      handleChange={onSelectionChange}
      value={value}
      disabled={isSubmitted || !isSectionEditable}
      label="Select"
      isRequired={isRequired}
      enableValidation={isSubmitClicked}
    />
  );
};
