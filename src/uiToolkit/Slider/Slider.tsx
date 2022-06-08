import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  SliderFilledTrackWrapper,
  SliderThumbWrapper,
  SliderTrackWrapper,
  TextareaWrapper,
  Wrapper,
  SliderWrapper,
} from './Slider.styles';
import { SliderThumbIcon } from '@iconComponents';
import { TextareaProps } from '@uiToolkit/Textarea/Textarea';
import { isValidNumberRegExp, noOp } from '@constants/common';
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
  onChangeStart?: (val: number) => void;
  onBlurTextField?: (num: number, min: number, max: number) => void; //only use this if textfield is enabled
  onChangeEnd: (val: number) => void;
  onChangeTextField?: (val: string) => void; //only use this if textfield is enabled
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
  onChangeStart,
  onChangeEnd,
  onChangeTextField = noOp,
  onBlurTextField = noOp,
}) => {
  const theme: ThemeType = useTheme();

  const stringifiedMax = isNaN(max) ? '' : String(max);
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
    value: stringifiedMax,
    type: 'number',
    name: 'right-text-area',
    handleChange: (e) => {
      //only allow digits
      if (e.target.value.match(isValidNumberRegExp)) {
        onChangeTextField(e.target.value);
      }
    },
    withBackground: false,
    rows: 1,
  };

  //textarea onBlur event handler
  const handleInputBlur = (): void => {
    onBlurTextField(max, min, Number.MAX_SAFE_INTEGER);
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
      <SliderThumbIcon boxSize="20px" color={theme.colors.surfaces.white} />
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
          onChangeStart={onChangeStart}
          onChange={onChange}
          onChangeEnd={onChangeEnd}
          value={value}
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
