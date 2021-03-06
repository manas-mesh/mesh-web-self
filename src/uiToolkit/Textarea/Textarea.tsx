// Libraries
import { useTheme } from '@emotion/react';
import { InputGroup, TextareaProps } from '@chakra-ui/react';

// Typography
import { TextLabelSmall, TextBodySmall } from '@uiToolkit/Typography';

// Styles
import {
  StyledChakraTextarea,
  StyledFormControl,
  StyledFormHelperText,
  StyledFormLabel,
  StyledInputRightElement,
} from './Textarea.styles';

export type TextareaPropsI = {
  type?: string;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  withBackground?: boolean;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  endIcon?: React.ReactNode;
  isDisabled?: boolean;
  error?: string;
  className?: string;
};

const Textarea: React.FC<TextareaPropsI & TextareaProps> = ({
  type = 'text',
  className = '',
  name,
  label,
  placeholder,
  helperText,
  withBackground = false,
  value,
  handleChange,
  rows = 3,
  endIcon,
  isDisabled,
  error,
  ...textAreaProps
}) => {
  const theme = useTheme();

  return (
    <StyledFormControl
      className={className}
      isDisabled={isDisabled}
      isInvalid={error ? true : false}
      withBackground={withBackground}
    >
      <StyledFormLabel htmlFor={name}>
        <TextLabelSmall color={error ? theme.colors.errors.fields : theme.colors.text.bg40}>
          {error ? error : label}
        </TextLabelSmall>
      </StyledFormLabel>
      <InputGroup>
        <StyledChakraTextarea
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          rows={rows}
          endIcon={endIcon}
          _disabled={{ opacity: '1' }}
          {...textAreaProps}
        />
        <StyledInputRightElement>{endIcon}</StyledInputRightElement>
      </InputGroup>
      <StyledFormHelperText>
        <TextBodySmall>{helperText}</TextBodySmall>
      </StyledFormHelperText>
    </StyledFormControl>
  );
};

export default Textarea;
