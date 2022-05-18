import React, { useState } from 'react';
import { Slider as SliderWrapper } from '@chakra-ui/react';
import Image from 'next/image';
import { Box } from '@mui/system';
import sliderThumbIcon from '../../assets/icons/sliderThumbIcon.svg';
import { SliderFilledTrackWrapper, SliderThumbWrapper, SliderTrackWrapper } from './Slider.styles';

interface SliderProps {
  isDisabled?: boolean;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (val: number) => void;
  onChangeEnd: (val: number) => void;
}

function Slider({ isDisabled, value, min = 0, max = 100, step = 1, onChange, onChangeEnd }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(value || 0);

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
      {/* <Image width={10} height={14} src={sliderThumbIcon} alt="slider-icon" /> */}
    </SliderThumbWrapper>
  );

  return (
    <>
      <Box width={100}>
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
