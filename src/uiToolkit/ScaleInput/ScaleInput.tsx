import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { TabBarOptionType, TabBarValueType, TabBarSelect } from 'uiToolkit/TabBarSelect/TabBarSelect';
import { TextLabelSmall } from 'uiToolkit/Typography';

const buttonGroupMarginStyles = {
  '> button:last-child': {
    marginRight: 0,
  },
};

const StyledHoverContainer = styled(Box)(({ theme, ...props }) => ({
  // check with Sree to apply on not in this component as buttons have their own hover style
  // '&:hover': {
  //   backgroundColor: props.disabled ? 'unset' : theme.colors.surfaces.bg96,
  //   cursor: props.disabled ? 'not-allowed' : 'pointer',
  // },
  // '&:active': {
  //   backgroundColor: theme.colors.surfaces.white,
  // },
}));

type PropTypes = {
  options: TabBarOptionType[];
  value?: TabBarValueType;
  onChange: (newSelectedValue: TabBarValueType) => void;
  withBackground?: boolean;
  startText?: string;
  endText?: string;
  disabled?: boolean;
  isRequired?: boolean;
  enableValidation?: boolean;
  label?: string;
};
// options: array of object {label, value}
export const ScaleInput = ({
  options,
  value,
  onChange,
  label = '',
  startText = '',
  endText = '',
  disabled = false,
  withBackground = true,
  isRequired = false,
  enableValidation = false,
}: PropTypes) => {
  const validationErrorText = enableValidation && isRequired && !value ? `${label} (Required)` : '';
  const theme = useTheme();

  return (
    <StyledHoverContainer
      bg={withBackground ? theme.colors.surfaces.bg92 : theme.colors.common.transparent}
      borderRadius={8}
      display="flex"
      flexDir="column"
      sx={{
        ...buttonGroupMarginStyles,
      }}
      // disabled={disabled}
    >
      {(label || validationErrorText) && (
        <TextLabelSmall color={validationErrorText ? theme.colors.errors.fields : theme.colors.text.bg40}>
          {validationErrorText ? validationErrorText : label}
        </TextLabelSmall>
      )}
      <TabBarSelect options={options} value={value} onChange={onChange} fullWidth withBackground={withBackground} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '24px',
          p: '8px 12px 12px',
        }}
      >
        <TextLabelSmall color={theme.colors.text.bg40}>{startText}</TextLabelSmall>
        <TextLabelSmall color={theme.colors.text.bg40} textAlign="end">
          {endText}
        </TextLabelSmall>
      </Box>
    </StyledHoverContainer>
  );
};
