import React, { useState } from 'react';
import { Slider as SliderWrapper } from '@chakra-ui/react';
import { Box } from '@mui/system';
import { SliderFilledTrackWrapper, SliderThumbWrapper, SliderTrackWrapper } from './Slider.styles';
import { SliderThumbIcon } from '../../assets/iconComponents/SliderThumbIcon';

export interface SliderProps {
  isDisabled?: boolean;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (val: number) => void;
  onChangeEnd: (val: number) => void;
}

function Slider({ isDisabled, value, min = 0, max = 100, step = 1, onChange, onChangeEnd }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(value);

  const onChangeHandler = (e: number): void => {
    setSliderValue(e);
    if (onChange) {
      onChange(e);
    }
  };
  const onChangeEndHandler = (e: number): void => {
    if (onChangeEnd) {
      onChangeEnd(e);
    }
  };
  const renderSliderTrack = (): JSX.Element => (
    <SliderTrackWrapper>
      <SliderFilledTrackWrapper />
    </SliderTrackWrapper>
  );

  const renderSliderThumb = (): JSX.Element => (
    <SliderThumbWrapper>
      <SliderThumbIcon />
    </SliderThumbWrapper>
  );

  return (
    <>
      <Box>
        <SliderWrapper
          min={min}
          max={max}
          step={step}
          onChange={onChangeHandler}
          onChangeEnd={onChangeEndHandler}
          value={sliderValue}
          isDisabled={isDisabled}
          focusThumbOnChange={false}
        >
          {renderSliderTrack()}
          {renderSliderThumb()}
        </SliderWrapper>
      </Box>
    </>
  );
}
export default Slider;
