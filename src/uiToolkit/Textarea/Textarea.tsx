// Libraries
import { useTheme } from '@emotion/react';
import { InputGroup, InputRightElement, FormLabel } from '@chakra-ui/react';

// Typography
import { TextLabelSmall, TextBodySmall } from '@uiToolkit/Typography';

// Styles
import { StyledChakraTextarea, StyledFormControl, StyledFormHelperText } from './Textarea.styles';

export type TextareaProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  withBackground: boolean;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  endIcon?: React.ReactNode;
  isDisabled?: boolean;
  error?: string;
  className?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  type = 'text',
  className = '',
  name,
  label,
  placeholder,
  helperText,
  withBackground = false,
  value,
  handleChange,
  rows,
  endIcon,
  isDisabled,
  error,
}) => {
  const theme = useTheme();

  return (
    <StyledFormControl
      className={className}
      isDisabled={isDisabled}
      isInvalid={error ? true : false}
      withBackground={withBackground}
    >
      <FormLabel htmlFor={name}>
        <TextLabelSmall color={error ? theme.colors.errors.fields : theme.colors.text.bg40}>
          {error ? error : label}
        </TextLabelSmall>
      </FormLabel>
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
        />
        <InputRightElement>{endIcon}</InputRightElement>
      </InputGroup>
      <StyledFormHelperText>
        <TextBodySmall>{helperText}</TextBodySmall>
      </StyledFormHelperText>
    </StyledFormControl>
  );
};

export { Textarea };
