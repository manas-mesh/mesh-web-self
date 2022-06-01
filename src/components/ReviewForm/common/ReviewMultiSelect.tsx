import { Box } from '@chakra-ui/react';
import { getMultiSelectOptionsText } from 'constants/helpers';
import React, { useCallback, useMemo } from 'react';
import Select from 'uiToolkit/Select';
import { TextBodySmall } from 'uiToolkit/Typography';

const validateNumberOfOptions = (min: number, max: number, currentSelected: number) => {
  let numberOfSelected = 0;
  if (Array.isArray(currentSelected)) {
    // multiple selection case
    numberOfSelected = currentSelected.length;
  } else {
    // single select case
    numberOfSelected = currentSelected ? 1 : 0;
  }
  return numberOfSelected <= max && numberOfSelected >= min;
};

// to be refactored and complete functionality when multiselect is done as per options selectable requirement.
export const ReviewMultiSelect = ({
  answerOptions,
  selectedAnswerOptions = [],
  submitAnswer = () => {},
  loading,
  answerType,
  isSubmitted,
  isRequired,
  isSubmitClicked,
  minOptions,
  maxOptions,
  disabled,
}) => {
  const values = selectedAnswerOptions.map((option) => ({ label: option.description, value: option.id }));
  const selectOptions = useMemo(
    () => answerOptions.map((option) => ({ label: option.description, value: option.id })),
    [answerOptions],
  );

  const onSelectionChange = useCallback(
    (value) => {
      const selectedIds = value.map((valueOption) => valueOption.value);
      const selectedOptions = answerOptions.filter((option) => selectedIds.includes(option.id));
      submitAnswer('rating', selectedOptions);
    },
    [answerOptions, submitAnswer],
  );
  const labelText = 'Select';

  const validationErrorText =
    isSubmitClicked && isRequired && !validateNumberOfOptions(minOptions, maxOptions, values)
      ? `${labelText} (Required)`
      : '';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Select
        name="question-multi-select"
        withBackground={false}
        options={selectOptions}
        handleChange={onSelectionChange}
        value={values}
        isDisabled={isSubmitted || disabled}
        isMulti
        label={labelText}
        error={validationErrorText}
        // min={minOptions}
        // max={maxOptions}
      />
      <TextBodySmall ml={3}>
        {getMultiSelectOptionsText(minOptions, maxOptions, answerOptions.length)}
        {isRequired ? ' *' : ''}
      </TextBodySmall>
    </Box>
  );
};
