// Libraries
import styled from '@emotion/styled';
import { Select as ChakraSelect, FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';

export const StyledChakraSelect = styled(ChakraSelect)`
  height: auto;
  border: ${(props) => `1px dashed ${props.theme.colors.border.bg60}`};
  border-width: 0 0 1px 0;
  border-radius: 0;
  font-size: ${(props) => props.theme.fonts.size.body.medium};
  color: ${(props) => props.theme.colors.text.bg20};
  padding: 0 0 1px 0;
  background: ${(props) => props.theme.colors.formFields.transparentBg};
  outline: none;
  width: ${(props) => (props.endIcon ? `calc(100% - 16px)` : `100%`)};

  &:hover {
    border-color: ${(props) => props.theme.colors.border.bg60};
  }
`;

export const StyledFormControl = styled(FormControl)`
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

export const StyledFormLabel = styled(FormLabel)`
  margin: 0;
`;

export const StyledFormHelperText = styled(FormHelperText)`
  text-align: right;
  margin: 0;
`;

export const ReactSelectCustomStyles = {
  container: (provided, state) => ({
    ...provided,
    width: '100%',
  }),
};
