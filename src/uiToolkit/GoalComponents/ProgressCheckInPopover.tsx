import { Slider, SliderProps } from '@uiToolkit/Slider';
import { FC, useEffect, useState } from 'react';
import { CheckInPopover, CheckInPopoverProps } from './CheckInPopover';
import React, { useRef } from 'react';
import { Box, useOutsideClick } from '@chakra-ui/react';
import { GOAL_CLOSED_OPTIONS, GOAL_IN_PROGRESS_OPTIONS } from '@constants/projectConstants';
import styled from '@emotion/styled';

export type goalStatusProps = {
  value: number | string;
  label: string;
  progressLevel: string;
  order?: number;
};
export interface ProgressCheckInPopoverProps {
  SliderProps?: SliderProps;
  CheckInPopoverProps?: CheckInPopoverProps;
}

const Wrapper = styled(Box)`
  position: relative;
`;

//MAIN COMPONENT STARTS HERE
export const ProgressCheckInPopover: FC<ProgressCheckInPopoverProps> = ({}) => {
  const sliderRef = useRef(null); //progressCheckInPopover wrapper ref
  const [openCheckInPopup, setOpenCheckInPopup] = useState(false);
  const [value, setValue] = useState(12); //this can be replaced by original value when integrating
  const [stringifiedValue, setStringifiedValue] = useState(String(value));
  const [stringifiedMax, setStringifiedMax] = useState(String(100));
  const goalStatuses: goalStatusProps[] = [...GOAL_IN_PROGRESS_OPTIONS, ...GOAL_CLOSED_OPTIONS];
  const [selectedGoalStatus, setSelectedGoalStatus] = useState(goalStatuses[0]);
  const [addANote, setAddANote] = useState('');
  const [percentageCompleted, setPercentageCompleted] = useState(
    Math.round((value / parseInt(stringifiedMax)) * 100 * 100) / 100,
  );
  const min = 0;

  useEffect(() => {
    if (parseInt(stringifiedValue) !== value) setStringifiedValue(String(value));
  }, [value]);

  useEffect(() => {
    setPercentageCompleted(Math.round((value / parseInt(stringifiedMax)) * 100 * 100) / 100);
  }, [value, stringifiedMax]);

  const closeCheckInPopup = (): void => {
    setOpenCheckInPopup(false);
  };

  //check if value is within min and max range
  const checkIfValueInRange = (value: number, min: number, max: number): number => {
    if (isNaN(value) || value <= min) return min;
    else if (value >= max) return max;
    return value;
  };

  //textarea onblur handler
  const handleBlur = (value: number, min: number, max: number): void => {
    const val = checkIfValueInRange(value, min, max);
    setStringifiedValue(String(val));
    setValue(val);
  };

  //close popover outside click
  useOutsideClick({
    ref: sliderRef,
    handler: closeCheckInPopup,
  });

  //cancel button onclick event handler
  const onCancel = (): void => {
    closeCheckInPopup();
  };
  //checkIn button onclick event handler
  const onCheckIn = (): void => {
    //console.log(value, 'value');
    closeCheckInPopup();
    // TODO
    //  API INTEGRATION TO UPDATE ACHIEVED VALUE
  };

  //add a note onChange handler
  const handleAddANote = (e: string) => {
    setAddANote(e);
  };

  //goal status select onChange handler
  const handleSelect = (item: goalStatusProps) => {
    setSelectedGoalStatus(item);
  };

  const sliderProps: SliderProps = {
    value: value,
    stringifiedValue: stringifiedValue,
    isDisabled: false,
    min: min,
    max: parseInt(stringifiedMax),
    onChangeStart: (e) => {
      setOpenCheckInPopup(true);
    },
    onChangeEnd: (e) => {
      setValue(e);
    },
    onChange: (e) => {
      setValue(e);
    },
    onChangeTextField: (e) => {
      setStringifiedMax(e);
    },
    onBlurTextField: (num, min, max) => {
      const maxValue = checkIfValueInRange(num, min, max);
      setStringifiedMax(String(maxValue));
      handleBlur(value, min, maxValue);
    },
  };
  const checkInPopoverProps: CheckInPopoverProps = {
    isOpen: openCheckInPopup,
    onCancel,
    onCheckIn,
    achievedValue: stringifiedValue,
    achievedInputHandler: (e) => {
      setStringifiedValue(e);
    },
    achievedInputOnBlur: (num) => {
      handleBlur(num, min, parseInt(stringifiedMax));
    },
    percentageCompleted,
    goalStatuses: goalStatuses,
    selectedGoalStatus,
    handleGoalSelect: handleSelect,
    addANote,
    onChangeAddANote: handleAddANote,
  };
  return (
    <Wrapper ref={sliderRef}>
      <Slider {...sliderProps} />
      <CheckInPopover {...checkInPopoverProps} />
    </Wrapper>
  );
};
