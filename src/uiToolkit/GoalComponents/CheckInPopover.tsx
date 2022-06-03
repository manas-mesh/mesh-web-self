import React, { FC } from 'react';
import {
  AchievedWrapper,
  AddNoteWrapper,
  FadeWrapper,
  FooterWrapper,
  Header,
  HelperTextWrapper,
  Wrapper,
} from './CheckInPopover.styles';
import { TextBodySmall, TextTitleMedium, TextTitleSmall } from '@uiToolkit/Typography';
import Textarea from '@uiToolkit/Textarea';
import { Button } from '@uiToolkit/Button';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@uiToolkit/Button/Button';
import { isValidNumberRegExp, noOp } from '@constants/common';
import Select from '@uiToolkit/Select/Select';
import { goalStatusProps } from './ProgressCheckInPopover';
import { Box } from '@chakra-ui/react';

//checkin popover props
export interface CheckInPopoverProps {
  isOpen?: boolean;
  style?: React.CSSProperties;
  achievedValue?: string;
  goalStatuses: goalStatusProps[];
  selectedGoalStatus: goalStatusProps;
  percentageCompleted: number;
  addANote: string;
  onCancel?: () => void;
  onCheckIn?: () => void;
  achievedInputHandler?: (val: string) => void;
  achievedInputOnBlur?: (num: number) => void;
  onChangeAddANote: (note: string) => void;
  handleGoalSelect: (statusItem: goalStatusProps) => void;
}

//header content
const HeaderWrapper = ({ percentageCompleted }: { percentageCompleted: number }) => (
  <Header>
    <Box p={2}>
      <TextTitleSmall>New Check In</TextTitleSmall>
    </Box>
    <Box p={2}>
      <TextTitleMedium>{percentageCompleted}%</TextTitleMedium>
    </Box>
  </Header>
);

//achieved section props
interface achievedSectionProps {
  handleAchievedInputBlur: (event: React.FocusEvent<HTMLDivElement, Element>) => void;
  achievedTextInputHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  achievedValue?: string;
  goalStatuses: goalStatusProps[];
  selectedStatus: goalStatusProps;
  handleGoalSelect: (e: goalStatusProps) => void;
}
//achieved section
const AchievedSectionWrapper = ({
  handleAchievedInputBlur,
  achievedTextInputHandler,
  achievedValue = '',
  selectedStatus,
  goalStatuses,
  handleGoalSelect,
}: achievedSectionProps) => (
  <AchievedWrapper alignItems={'center'}>
    <Box onBlur={handleAchievedInputBlur}>
      <Textarea
        label="Achieved"
        type="number"
        name="achieved-text-area"
        withBackground={false}
        value={achievedValue}
        rows={1}
        handleChange={achievedTextInputHandler}
      />
    </Box>
    <Box p={2} style={{ padding: 0, flex: 1 }}>
      <Select
        label="Status"
        handleChange={(e) => handleGoalSelect(e)}
        value={selectedStatus}
        options={goalStatuses}
        withBackground={false}
        name="goal-status-select"
      />
    </Box>
  </AchievedWrapper>
);

//MAIN COMPONENTS STARTS HERE
export const CheckInPopover: FC<CheckInPopoverProps> = ({
  isOpen = false,
  style,
  onCancel,
  achievedValue = '',
  percentageCompleted,
  achievedInputHandler = noOp,
  achievedInputOnBlur = noOp,
  selectedGoalStatus,
  goalStatuses = [],
  handleGoalSelect,
  onCheckIn,
  addANote,
  onChangeAddANote,
}) => {
  //textarea handler
  const achievedTextInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (e.target.value.match(isValidNumberRegExp)) {
      achievedInputHandler(e.target.value);
    }
  };

  //onBlur handler
  const handleAchievedInputBlur = (): void => {
    const convertedNumber = Math.round((parseFloat(achievedValue) + Number.EPSILON) * 100) / 100;
    achievedInputOnBlur(convertedNumber);
  };

  return (
    <FadeWrapper style={style} unmountOnExit in={isOpen}>
      <Wrapper>
        <HeaderWrapper percentageCompleted={percentageCompleted} />
        <AchievedSectionWrapper
          handleAchievedInputBlur={handleAchievedInputBlur}
          achievedTextInputHandler={achievedTextInputHandler}
          achievedValue={achievedValue}
          goalStatuses={goalStatuses}
          selectedStatus={selectedGoalStatus}
          handleGoalSelect={handleGoalSelect}
        />
        <AddNoteWrapper>
          <Textarea
            rows={2}
            label="Add a note (Optional)"
            placeholder="Enter note here (Type @ to mention people)"
            type="string"
            name="add-note-text-area"
            withBackground={false}
            value={addANote}
            handleChange={(e) => onChangeAddANote(e.target.value)}
          />
        </AddNoteWrapper>
        <HelperTextWrapper>
          <TextBodySmall>You can increase progress to {'"100%"'} &#8226; Expected:100%</TextBodySmall>
        </HelperTextWrapper>
        <FooterWrapper>
          <Button mr={'12px'} onClick={onCancel} size={BUTTON_SIZE.large} variant={BUTTON_VARIANT.outlined}>
            Cancel
          </Button>
          <Button onClick={onCheckIn} size={BUTTON_SIZE.large} variant={BUTTON_VARIANT.solid}>
            Checkin
          </Button>
        </FooterWrapper>
      </Wrapper>
    </FadeWrapper>
  );
};
