// Libraries
import { useTheme } from '@emotion/react';
import { InputGroup, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';

// Typography
import { TextLabelSmall, TextBodySmall } from '@uiToolkit/Typography';

// Styles
import { StyledChakraSelect, StyledFormControl, StyledFormHelperText, StyledFormLabel } from './Select.styles';

export type SelectProps = {
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
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
  error?: string;
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
        <Menu>
          <MenuButton
            as={StyledChakraSelect}
            id={name}
            name={name}
            // placeholder={placeholder}
            value={value}
            onChange={handleChange}
          >
            {/* <StyledChakraSelect
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            > */}
            {/* <MenuList>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                  {option.label}
                  </option>
                  ))}
                </MenuList> */}
            {/* </StyledChakraSelect> */}d
          </MenuButton>
          {/* <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList> */}
          <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
          </MenuOptionGroup>
        </Menu>
      </InputGroup>
      <StyledFormHelperText>
        <TextBodySmall>{helperText}</TextBodySmall>
      </StyledFormHelperText>
    </StyledFormControl>
  );
};

export { Select };
