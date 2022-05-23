import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import {
  SliderFilledTrackWrapper,
  SliderThumbWrapper,
  SliderTrackWrapper,
  TextareaWrapper,
  Wrapper,
  SliderWrapper,
} from './Slider.styles';
import { SliderThumbIcon } from '../../assets/iconComponents/SliderThumbIcon';
import { TextareaProps } from '@uiToolkit/Textarea/Textarea';
import { isValidNumberRegExp } from '@constants/index';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';

//slider proptype
export interface SliderProps {
  isDisabled?: boolean;
  value: number;
  min?: number;
  showTextField?: boolean;
  max?: number;
  step?: number;
  endIcon?: string;
  style?: React.CSSProperties;
  className?: string;
  onChange?: (val: number) => void;
  onChangeEnd: (val: number) => void;
}

//SLIDER COMPONENT WITH INPUT FIELD STARTS HERE
const Slider: React.FC<SliderProps> = ({
  showTextField = true,
  isDisabled = false,
  className = '',
  value,
  style = {},
  min = 0,
  max = 100,
  step = 1,
  onChange,
  onChangeEnd,
}) => {
  const theme: ThemeType = useTheme();

  const [sliderValue, setSliderValue] = useState(String(value));

  //value is stored as string so that it can be used in both slider and textarea component
  const stringValueToNumber: number = isNaN(parseFloat(sliderValue)) ? min : parseFloat(sliderValue);

  //left text area props
  const leftTextAreaProps: TextareaProps = {
    isDisabled: true,
    value: String(min),
    type: 'number',
    name: 'left-text-area',
    handleChange: (e) => {},
    withBackground: false,
    rows: 1,
  };

  //right text area props
  const rightTextAreaProps: TextareaProps = {
    isDisabled: isDisabled,
    value: String(sliderValue),
    type: 'number',
    name: 'right-text-area',
    handleChange: (e) => {
      //only allow digits , '-' and '.'  (whole numbers, negative integers, decimals)
      if (e.target.value.match(isValidNumberRegExp)) {
        setSliderValue(e.target.value);
        onChangeEndHandler(parseFloat(e.target.value));
      }
    },
    withBackground: false,
    rows: 1,
  };

  //slider onChange event handler
  const onChangeHandler = (e: number): void => {
    setSliderValue(String(e));
    if (onChange) {
      onChange(e);
    }
  };

  //slider onChangeEnd event handler
  const onChangeEndHandler = (e: number): void => {
    const convertedNumber = Math.round((e + Number.EPSILON) * 100) / 100;
    if (onChangeEnd) {
      onChangeEnd(convertedNumber);
    }
  };

  //textarea onBlur event handler
  //round the value to the nearest limit when value is out of the range
  const handleInputBlur = (): void => {
    //rounding value to 2 decimal places
    const convertedNumber = Math.round((parseFloat(sliderValue) + Number.EPSILON) * 100) / 100;
    let num: number = convertedNumber;
    if (isNaN(num) || num <= parseFloat(min)) num = min;
    else if (num >= parseFloat(max)) num = max;
    setSliderValue(String(num));
    onChangeEndHandler(num);
  };

  //slider track render
  const renderSliderTrack = (): JSX.Element => (
    <SliderTrackWrapper>
      <SliderFilledTrackWrapper />
    </SliderTrackWrapper>
  );

  //slider thumb render
  const renderSliderThumb = (): JSX.Element => (
    <SliderThumbWrapper>
      <SliderThumbIcon color={theme.colors.surfaces.white} />
    </SliderThumbWrapper>
  );

  //text field render
  const renderTextField = (props: TextareaProps): JSX.Element | undefined => {
    if (showTextField) {
      return (
        <>
          <Box onBlur={handleInputBlur}>
            <TextareaWrapper {...props} />
          </Box>
        </>
      );
    }
  };

  return (
    <>
      <Wrapper style={style} className={className}>
        {renderTextField(leftTextAreaProps)}
        <SliderWrapper
          min={min}
          max={max}
          step={step}
          onChange={onChangeHandler}
          onChangeEnd={onChangeEndHandler}
          value={stringValueToNumber}
          isDisabled={isDisabled}
          focusThumbOnChange={false}
        >
          {renderSliderTrack()}
          {renderSliderThumb()}
        </SliderWrapper>
        {renderTextField(rightTextAreaProps)}
      </Wrapper>
    </>
  );
};
export { Slider };
