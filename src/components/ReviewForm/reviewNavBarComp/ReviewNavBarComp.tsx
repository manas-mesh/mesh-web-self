import { Box } from '@chakra-ui/react';
import { REVIEW_FORM_COMPLETION_STATUS } from 'constants/reviewConstants';
import React, { useCallback } from 'react';
import { ReviewNavListItem } from 'uiToolkit/Listitem';
import { TextLabelMedium } from 'uiToolkit/Typography';
import { REVIEW_STAGE_COMPONENT_MAP } from '../FormPages/ReviewForm';

interface PropsI {
  selectForm: (selectedForm: any) => void;
  selectedForm: any;
  reviewForms: any;
  selectedReviewInfo: any;
}

interface ReviewNavItemI {
  form: any;
  selectForm: (selectedForm: any) => void;
  isSelected: boolean;
}
const ReviewNavItem: React.FC<ReviewNavItemI> = ({ form, selectForm, isSelected }) => {
  const { formName, status, unansweredQuestions } = form;
  const { title } = REVIEW_STAGE_COMPONENT_MAP[formName];

  let iconName = 'statusNotStarted';
  let subInfoText = 'Not started';
  if (status === REVIEW_FORM_COMPLETION_STATUS.COMPLETED) {
    subInfoText = 'Completed';
    iconName = 'statusCompleted';
  }
  if (status === REVIEW_FORM_COMPLETION_STATUS.IN_PROGRESS) {
    subInfoText = `${unansweredQuestions} questions are pending`;
    iconName = 'statusInProgress';
  }

  const handleClick = useCallback(() => selectForm(form), [form, selectForm]);

  return (
    <ReviewNavListItem
      item={{ title, subTitle: subInfoText, actionIcon: iconName }}
      onClick={handleClick}
      active={isSelected}
    />
  );
};

export const ReviewNavBarComp: React.FC<PropsI> = ({ selectForm, selectedForm, reviewForms, selectedReviewInfo }) => (
  <>
    <TextLabelMedium sx={{ py: '26px', px: 1.5, color: 'text.bg40' }}>
      {selectedReviewInfo.reviewProviderType} REVIEW
    </TextLabelMedium>
    <Box>
      {reviewForms.map((form) => (
        <ReviewNavItem
          key={form.formName}
          form={form}
          selectForm={selectForm}
          isSelected={selectedForm.formName === form.formName}
        />
      ))}
    </Box>
  </>
);
