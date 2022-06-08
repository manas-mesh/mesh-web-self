// Libraries
import styled from '@emotion/styled';
import ReactSelect from 'react-select';
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';

export const StyledReactSelect = styled(ReactSelect)`
  width: 100%;

  .select__control {
    border: ${(props) => `1px dashed ${props.theme.colors.border.bg60}`};
    border-width: 0 0 1px 0;
    border-radius: 0;
    font-size: ${(props) => props.theme.fonts.size.body.medium};
    color: ${(props) => props.theme.colors.text.bg20};
    background: ${(props) => props.theme.colors.formFields.transparentBg};
    min-height: auto;
  }

  .select__control--is-focused {
    border: ${(props) => `1px dashed ${props.theme.colors.border.bg60}`};
    border-width: 0 0 1px 0;
    border-radius: 0;
    box-shadow: none;
  }

  .select__value-container {
    padding: 0;
  }

  .select__input-container {
    margin: 0;
    padding: 0;
  }

  .select__placeholder {
    margin: 0;
    padding: 0;
  }

  .select__menu {
    width: 110%;
    margin-left: -5%;
    background: ${(props) => props.theme.colors.selectMenu.bg};
    padding: 8px;
    border: ${(props) => `1px solid ${props.theme.colors.border.tw4}`};
    border-radius: 8px;
    box-shadow: ${(props) => props.theme.shadows.light};

    .select__menu-list {
      padding: 0;

      .select__option {
        padding: 4px;
        border-radius: 4px;
        font-size: ${(props) => props.theme.fonts.size.body.medium};
        color: ${(props) => props.theme.colors.text.bg20};
      }

      .select__option:not(:last-of-type) {
        margin-bottom: 8px;
      }

      .select__option--is-focused {
        background: ${(props) => props.theme.colors.selectMenu.hoverItemBg};
      }

      .select__option--is-selected {
        background: ${(props) => props.theme.colors.selectMenu.focusedItemBg};
      }

      .select__option--is-disabled {
        opacity: 24%;
      }
    }
  }
`;

export const StyledFormControl = styled(FormControl, {
  shouldForwardProp: (prop: string) => !['withBackground'].includes(prop),
})`
  background: ${(props) =>
    props.withBackground && !props.isDisabled
      ? props.theme.colors.formFields.bg
      : props.theme.colors.formFields.transparentBg};
  padding: 12px;
  border-radius: 8px;

  &:hover {
    background: ${(props) =>
      props.withBackground & !props.isDisabled
        ? props.theme.colors.formFields.hoverBg
        : props.theme.colors.formFields.transparentBg};
  }

  &:focus-within {
    background: ${(props) =>
      props.withBackground ? props.theme.colors.formFields.focusBg : props.theme.colors.formFields.transparentBg};
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  margin: 0;

  &[disabled],
  &[aria-disabled='true'],
  &[data-disabled] {
    opacity: 1;
  }
`;

export const StyledFormHelperText = styled(FormHelperText)`
  text-align: right;
  margin: 0;
`;
