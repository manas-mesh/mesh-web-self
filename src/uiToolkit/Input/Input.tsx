// Libraries
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';

// Typography
import { TextLabelSmall, TextBodySmall } from '@uiToolkit/Typography';

const StyledChakraInput = styled(ChakraInput)`
  border: ${(props) => `1px dashed ${props.theme.colors.border.bg60}`};
  border-width: 0 0 1px 0;
  font-size: ${(props) => props.theme.fonts.size.body.medium};
  color: ${(props) => props.theme.colors.text.bg20};
  padding: 0;
  background: ${(props) => props.theme.colors.formFields.transparentBg};
  outline: none;
  width: ${(props) => (props.endIcon ? `calc(100% - 16px)` : `100%`)};
`;

const StyledFormControl = styled(FormControl)`
  background: ${(props) =>
    props.withBackground ? props.theme.colors.formFields.bg : props.theme.colors.formFields.transparentBg};
  padding: 12px;
  border-radius: 8px;

  &:hover {
    background: ${(props) =>
      props.withBackground ? props.theme.colors.formFields.hoverBg : props.theme.colors.formFields.transparentBg};
  }

  &:focus-within {
    background: ${(props) =>
      props.withBackground ? props.theme.colors.formFields.focusBg : props.theme.colors.formFields.transparentBg};
  }
`;

const StyledFormHelperText = styled(FormHelperText)`
  text-align: right;
`;

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
      <FormLabel htmlFor={name}>
        <TextLabelSmall color={error ? theme.colors.errors.fields : theme.colors.text.bg40}>
          {error ? error : label}
        </TextLabelSmall>
      </FormLabel>
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
        <InputRightElement>{endIcon}</InputRightElement>
      </InputGroup>
      <StyledFormHelperText>
        <TextBodySmall>{helperText}</TextBodySmall>
      </StyledFormHelperText>
    </StyledFormControl>
  );
};

export { Input };
