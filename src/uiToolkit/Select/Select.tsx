// Libraries
import React from 'react';
import { useTheme } from '@emotion/react';
import { InputGroup } from '@chakra-ui/react';

// Typography
import { TextLabelSmall, TextBodySmall } from '@uiToolkit/Typography';

// Icons
import { ArrowDropDown } from '@assets/iconComponents';

// Styles
import { StyledFormControl, StyledFormHelperText, StyledFormLabel, StyledReactSelect } from './Select.styles';

export type SelectProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  withBackground: boolean;
  value: object;
  options: {
    value: string | number;
    label: string;
  }[];
  handleChange: (value: any) => void;
  customClassName?: string;
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
  DropdownIndicator: () => <ArrowDropDown />,
  IndicatorSeparator: () => null,
};

const Select: React.FC<SelectProps> = ({
  name,
  label,
  placeholder,
  helperText,
  withBackground = false,
  value,
  options,
  handleChange,
  customClassName = '',
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
        <StyledReactSelect
          options={options}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`select ${customClassName}`}
          classNamePrefix="select"
          isDisabled={isDisabled}
          isMulti={isMulti}
          isClearable={false}
          hideSelectedOptions={false}
          components={reactSelectComponents}
        />
      </InputGroup>
      <StyledFormHelperText>
        <TextBodySmall>{helperText}</TextBodySmall>
      </StyledFormHelperText>
    </StyledFormControl>
  );
};

export default Select;
