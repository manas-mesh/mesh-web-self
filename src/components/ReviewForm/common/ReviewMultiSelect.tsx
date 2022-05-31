import { Box } from '@chakra-ui/react';
import { useAppDispatch } from '@hooks/reduxHooks';
import { getMultiSelectOptionsText } from 'constants/helpers';
import React, { useCallback, useMemo } from 'react';
import Select from 'uiToolkit/Select';
import { TextBodySmall } from 'uiToolkit/Typography';

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
  // const dispatch = useAppDispatch();
  const values = selectedAnswerOptions.map((option) => option.id);
  const selectOptions = useMemo(
    () => answerOptions.map((option) => ({ label: option.description, value: option.id })),
    [answerOptions],
  );

  const onSelectionChange = useCallback(
    (e) => {
      const selectedIds = e.target.value;
      const selectedOptions = answerOptions.filter((option) => selectedIds.includes(option.id));
      submitAnswer('rating', selectedOptions);
    },
    [answerOptions, submitAnswer],
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Select
        options={selectOptions}
        handleChange={onSelectionChange}
        value={values}
        isDisabled={isSubmitted || disabled}
        isMulti
        label="Select"
        isRequired={isRequired}
        enableValidation={isSubmitClicked}
        min={minOptions}
        max={maxOptions}
      />
      <TextBodySmall sx={{ ml: 1.5 }}>
        {getMultiSelectOptionsText(minOptions, maxOptions, answerOptions.length)}
        {isRequired ? ' *' : ''}
      </TextBodySmall>
    </Box>
  );

  //   const selectedAnswerIds = selectedAnswerOptions
  //     ? selectedAnswerOptions.map((item) => item.id)
  //     : '';
  //   const selectedAnswerOptionsReferential = answerOptions.filter(
  //     (item) => selectedAnswerIds.indexOf(item.id) > -1
  //   );
  //   return (
  //     <Box>
  //       <StyledSelect
  //         variant="outlined"
  //         fullWidth
  //         displayEmpty
  //         multiple
  //         value={selectedAnswerOptionsReferential}
  //         MenuProps={{
  //           anchorOrigin: {
  //             vertical: 'bottom',
  //             horizontal: 'left',
  //           },
  //           transformOrigin: {
  //             vertical: 'top',
  //             horizontal: 'left',
  //           },
  //           getContentAnchorEl: null,
  //           style: { maxWidth: width },
  //         }}
  //         SelectDisplayProps={{
  //           style: {
  //             maxHeight: '3.5rem',
  //             height: '3.5rem',
  //             overflowY: 'auto',
  //             padding: '0.5rem 1.5rem 0.5rem 0.75rem',
  //           },
  //         }}
  //         renderValue={(selected) => {
  //           let text = '';
  //           if (selected.length === 0) {
  //             text = `Select ${isRequired ? '*' : ''}`;
  //           } else {
  //             text = selected.map((item) => item.description).join(', ');
  //           }
  //           return <TextBodyMedium>{text}</TextBodyMedium>;
  //         }}
  //         onChange={({ target }) => {
  //           if (target.value.length > maxOptions) {
  //             dispatch(showInfoSnackbar('Maximum allowed options already selected'));
  //             return;
  //           }
  //           submitAnswer('rating', target.value);
  //         }}
  //         disabled={isSubmitted || disabled}
  //         showError={
  //           (!selectedAnswerOptions || selectedAnswerOptions.length < minOptions) &&
  //           isRequired &&
  //           isSubmitClicked
  //         }
  //       >
  //         {answerOptions.map((option, optionIndex) => {
  //           const isSelected = selectedAnswerOptions.map((item) => item.id).indexOf(option.id) > -1;
  //           return (
  //             <MenuItem key={`menu-option-${optionIndex}`} value={option}>
  //               <Checkbox color="primary" checked={isSelected} label={option.description} />
  //             </MenuItem>
  //           );
  //         })}
  //       </StyledSelect>
  //       <TextBodyMedium>
  //         {getMultiSelectOptionsText(minOptions, maxOptions, answerOptions.length)}
  //         {isRequired ? ' *' : ''}
  //       </TextBodyMedium>
  //     </Box>
  //   );
};
