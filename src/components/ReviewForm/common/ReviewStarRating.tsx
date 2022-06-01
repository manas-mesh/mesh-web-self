import { Box } from '@chakra-ui/react';
import React from 'react';
import { BaseStarRating } from 'uiToolkit/BaseStarRating';

export const ReviewStarRating = ({
  answerOptions = [],
  selectedAnswerOptions = [],
  submitAnswer,
  disabled = false,
  isSubmitClicked = false,
  isRequired = false,
}) => {
  const onChangeHandler = (newValue: number) => {
    submitAnswer(
      'rating',
      answerOptions.filter((ans) => ans.displayOrder === newValue),
    );
  };
  const value = answerOptions.filter(
    (answerItem) => selectedAnswerOptions?.map((item) => item.id).indexOf(answerItem.id) > -1,
  );
  return (
    <Box sx={{ p: 1.5 }}>
      <BaseStarRating
        label="Rating"
        maxRating={answerOptions.length}
        handleChange={onChangeHandler}
        rating={value[0]?.displayOrder || 0}
        disabled={disabled}
        isRequired={isRequired}
        enableValidation={isSubmitClicked}
      />
    </Box>
  );
};
