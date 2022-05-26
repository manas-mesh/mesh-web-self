// Libraries
import { useTheme } from '@emotion/react';
import { InputGroup } from '@chakra-ui/react';

// Typography
import { TextLabelSmall, TextBodySmall } from '@uiToolkit/Typography';

// Styles
import {
  StyledChakraInput,
  StyledFormControl,
  StyledFormHelperText,
  StyledFormLabel,
  StyledInputRightElement,
} from './Input.styles';

export type InputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  withBackground: boolean;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  endIcon?: React.ReactNode;
  isDisabled?: boolean;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  label,
  placeholder,
  helperText,
  withBackground = false,
  value,
  handleChange,
  endIcon,
  isDisabled,
  error,
}) => {
  const theme = useTheme();

  return (
    <StyledFormControl isDisabled={isDisabled} isInvalid={error ? true : false} withBackground={withBackground}>
      <StyledFormLabel htmlFor={name}>
        <TextLabelSmall color={error ? theme.colors.errors.fields : theme.colors.text.bg40}>
          {error ? error : label}
        </TextLabelSmall>
      </StyledFormLabel>
      <InputGroup>
        <StyledChakraInput
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          endIcon={endIcon}
        />
        <StyledInputRightElement>{endIcon}</StyledInputRightElement>
      </InputGroup>
      <StyledFormHelperText>
        <TextBodySmall>{helperText}</TextBodySmall>
      </StyledFormHelperText>
    </StyledFormControl>
  );
};

export { Input };
