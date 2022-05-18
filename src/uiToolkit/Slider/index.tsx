import React, { useState } from 'react';
import { Slider as SliderWrapper } from '@chakra-ui/react';
import Image from 'next/image';
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, background } from '@chakra-ui/react';
import { baseTheme } from '../../themes/clients/baseTheme';
import sliderThumbIcon from '../../assets/icons/sliderThumbIcon.svg';
// import { SliderFilledTrackWrapper, SliderThumbWrapper, SliderTrackWrapper } from './Slider.styles';

interface SliderProps {
  isDisabled?: boolean;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (val: number) => void;
  onChangeEnd: (val: number) => void;
}

export const SliderTrackWrapper = styled(SliderTrack)`
  height: 20px;
  border: none;
  border-radius: 4px;
  background: ${baseTheme.colors.surfaces.g86};
`;

export const SliderTrackWrapper2 = styled(SliderTrack)(({ theme, ...props }: any) => ({
  height: '20px',
  border: 'none',
  borderRadius: '4px',
  background: theme.colors.surfaces.g86,
}));

export const SliderThumbWrapper = styled(SliderThumb)`
  height: 28px;
  width: 28px;
  border-radius: 4px;
  background: ${baseTheme.colors.surfaces.bg40};
`;

export const SliderFilledTrackWrapper = styled(SliderFilledTrack)`
  background: ${baseTheme.colors.surfaces.gr100};
`;

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
