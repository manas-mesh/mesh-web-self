import { Slider, SliderProps } from '@uiToolkit/Slider';
import { FC, useEffect, useState } from 'react';
import { CheckInPopover, CheckInPopoverProps } from './CheckInPopover';
import React, { useRef } from 'react';
import { useOutsideClick } from '@chakra-ui/react';

export interface ProgressCheckInPopoverProps {
  SliderProps?: SliderProps;
  CheckInPopoverProps?: CheckInPopoverProps;
}

//MAIN COMPONENT STARTS HERE
export const ProgressCheckInPopover: FC<ProgressCheckInPopoverProps> = ({ SliderProps }) => {
  const sliderRef = useRef(null); //progresscheckinpopover wrapper ref
  const [openCheckInPopup, setOpenCheckInPopup] = useState(false);
  const [value, setValue] = useState(12);
  const [stringifiedValue, setStringifiedValue] = useState(String(value));

  const min = 0;
  const max = 100;

  useEffect(() => {
    if (parseInt(stringifiedValue) !== value) setStringifiedValue(String(value));
  }, [value]);

  const closeCheckinPopup = (): void => {
    setOpenCheckInPopup(false);
  };

  //check if value is wthin min and max range
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
    handler: closeCheckinPopup,
  });

  //cancel button onclick event handler
  const onCancel = (): void => {
    closeCheckinPopup();
  };
  //checkin button onclick event handler
  const onCheckIn = (): void => {
    console.log(value, 'value');
    closeCheckinPopup();
    // TODO
    //  API INTEGRATION TO UPDATE ACHIEVED VALUE
  };
  const sliderProps: SliderProps = {
    value: value,
    stringifiedValue: stringifiedValue,
    isDisabled: false,
    min: min,
    max: max,
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
      setStringifiedValue(e);
    },
    onBlurTextField: (num, min, max) => {
      handleBlur(num, min, max);
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
      handleBlur(num, min, max);
    },
  };
  return (
    <div ref={sliderRef} style={{ position: 'relative' }}>
      <Slider {...sliderProps} />
      <CheckInPopover {...checkInPopoverProps} />
    </div>
  );
};
