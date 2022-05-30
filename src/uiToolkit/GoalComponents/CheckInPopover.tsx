import React, { FC, useState } from 'react';
import {
  AchievedWrapper,
  AddNoteWrapper,
  FadeWrapper,
  FooterWrapper,
  Header,
  HelperTextWrapper,
  LeftSegment,
  RightSegment,
  Wrapper,
} from './CheckInPopover.styles';
import { TextBodySmall, TextTitleMedium, TextTitleSmall } from '@uiToolkit/Typography';
import Textarea from '@uiToolkit/Textarea';
import { Button } from '@uiToolkit/Button';
import { BUTTON_SIZE, BUTTON_VARIANT } from '@uiToolkit/Button/Button';
import { commonInputHandler } from '@utils/commonEventHandler';
import { isValidNumberRegExp } from '@constants/index';

//checkin popover props
export interface CheckInPopoverProps {
  isOpen?: boolean;
  style?: React.CSSProperties;
  achievedValue?: string;
  onCancel?: () => void;
  onCheckIn?: () => void;
  achievedInputHandler?: (val: string) => void;
  achievedInputOnBlur?: (num: number) => void;
}

//header content
const HeaderWrapper = () => (
  <Header>
    <LeftSegment>
      <TextTitleSmall fontWeight={500}>New Check In</TextTitleSmall>
    </LeftSegment>
    <RightSegment>
      <TextTitleMedium fontWeight={500}>80%</TextTitleMedium>
    </RightSegment>
  </Header>
);

//achieved section props
interface achievedSectionProps {
  handleAchievedInputBlur: (event: React.FocusEvent<HTMLDivElement, Element>) => void;
  achievedTextInputHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  achievedValue?: string;
}
//achieved section
const AchievedSectionWrapper = ({
  handleAchievedInputBlur,
  achievedTextInputHandler,
  achievedValue = '',
}: achievedSectionProps) => (
  <AchievedWrapper>
    <LeftSegment style={{ padding: 0 }} onBlur={handleAchievedInputBlur}>
      <Textarea
        label="Achieved"
        type="number"
        name="achieved-text-area"
        withBackground={false}
        value={achievedValue}
        rows={1}
        handleChange={achievedTextInputHandler}
      />
    </LeftSegment>
    <RightSegment style={{ padding: 0 }}>
      <Textarea
        rows={1}
        label="Achieved"
        type="string"
        name="achieved-text-area"
        withBackground={false}
        value={'80%'}
        handleChange={() => {}}
      />
    </RightSegment>
  </AchievedWrapper>
);

//MAIN COMPONENTS STARTS HERE
export const CheckInPopover: FC<CheckInPopoverProps> = ({
  isOpen = false,
  style,
  onCancel,
  achievedValue = '',
  achievedInputHandler,
  achievedInputOnBlur,
  onCheckIn,
}) => {
  //onCancel handler
  const onCancelHandler = (): void => {
    commonInputHandler(onCancel);
  };

  //textarea handler
  const achievedTextInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (e.target.value.match(isValidNumberRegExp)) {
      commonInputHandler(achievedInputHandler, [e.target.value]);
    }
  };

  //onBlur handler
  const handleAchievedInputBlur = (): void => {
    const convertedNumber = Math.round((parseFloat(achievedValue) + Number.EPSILON) * 100) / 100;
    commonInputHandler(achievedInputOnBlur, [convertedNumber]);
  };
  //onclick checkin button handler
  const onCheckInHandler = (): void => {
    commonInputHandler(onCheckIn);
  };

  return (
    <FadeWrapper style={style} unmountOnExit in={isOpen}>
      <Wrapper>
        <HeaderWrapper />
        <AchievedSectionWrapper
          handleAchievedInputBlur={handleAchievedInputBlur}
          achievedTextInputHandler={achievedTextInputHandler}
          achievedValue={achievedValue}
        />
        <AddNoteWrapper>
          <Textarea
            rows={2}
            label="Add a note (Optional)"
            placeholder="Enter note here (Type @ to mention people)"
            type="string"
            name="add-note-text-area"
            withBackground={false}
            value={''}
            handleChange={(e) => {}}
          />
        </AddNoteWrapper>
        <HelperTextWrapper>
          <TextBodySmall>You can increase progress to {'"100%"'} &#8226; Expected:100%</TextBodySmall>
        </HelperTextWrapper>
        <FooterWrapper>
          <Button
            mr={'12px'}
            onClick={onCancelHandler}
            fontWeight={500}
            size={BUTTON_SIZE.large}
            variant={BUTTON_VARIANT.outlined}
          >
            Cancel
          </Button>
          <Button onClick={onCheckInHandler} size={BUTTON_SIZE.large} variant={BUTTON_VARIANT.solid}>
            Checkin
          </Button>
        </FooterWrapper>
      </Wrapper>
    </FadeWrapper>
  );
};
