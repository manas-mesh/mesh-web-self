// Libraries
import { useTheme } from '@emotion/react';
import ReactSelect from 'react-select';
import { InputGroup } from '@chakra-ui/react';

// Typography
import { TextLabelSmall, TextBodySmall } from '@uiToolkit/Typography';

// Styles
import { StyledFormControl, StyledFormHelperText, StyledFormLabel, ReactSelectCustomStyles } from './Select.styles';
import React from 'react';

export type SelectProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  withBackground: boolean;
  value: string;
  options: {
    value: string | number;
    label: string;
  }[];
  handleChange: (value: any) => void;
  isMulti?: boolean;
  isDisabled?: boolean;
  error?: string;
};

const reactSelectComponents = {
  MultiValueContainer: ({ selectProps, data }) => {
    const values = selectProps.value;
    if (values) {
      return values[values.length - 1].label === data.label ? data.label : data.label + ', ';
    } else return '';
  },
};

const Select: React.FC<SelectProps> = ({
  type = 'text',
  name,
  label,
  placeholder,
  helperText,
  withBackground = false,
  value,
  options,
  handleChange,
  isMulti,
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
        <ReactSelect
          styles={ReactSelectCustomStyles}
          options={options}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          isMulti={isMulti}
          components={reactSelectComponents}
        />
      </InputGroup>
      <StyledFormHelperText>
        <TextBodySmall>{helperText}</TextBodySmall>
      </StyledFormHelperText>
    </StyledFormControl>
  );
};

// const Select: React.FC<SelectProps> = ({
//   type = 'text',
//   name,
//   label,
//   placeholder,
//   helperText,
//   withBackground = false,
//   value,
//   options,
//   handleChange,
//   isDisabled,
//   error,
// }) => {
//   const theme = useTheme();

//   return (
//     <StyledFormControl isDisabled={isDisabled} isInvalid={error ? true : false} withBackground={withBackground}>
//       <StyledFormLabel htmlFor={name}>
//         <TextLabelSmall color={error ? theme.colors.errors.fields : theme.colors.text.bg40}>
//           {error ? error : label}
//         </TextLabelSmall>
//       </StyledFormLabel>
//       <InputGroup>
//         <StyledChakraSelect
//           id={name}
//           name={name}
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={handleChange}
//         >
//           {options.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </StyledChakraSelect>
//       </InputGroup>
//       <StyledFormHelperText>
//         <TextBodySmall>{helperText}</TextBodySmall>
//       </StyledFormHelperText>
//     </StyledFormControl>
//   );
// };

export default Select;
