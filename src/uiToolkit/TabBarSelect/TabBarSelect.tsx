import { Box } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { BUTTON_VARIANT } from '@uiToolkit/Button/Button';
import { useState } from 'react';
import { Button } from 'uiToolkit/Button';

const buttonGroupMarginStyles = {
  '> button:last-child': {
    marginRight: 0,
  },
};

export type ValueType = number | string;

type OptionType = {
  label: string;
  value: ValueType;
};

type PropTypes = {
  options: OptionType[];
  value: ValueType;
  onChange: (newSelectedValue: ValueType) => void;
  fullWidth?: boolean;
  withBackground?: boolean;
};

export const TabBarSelect = ({ options, value, onChange, fullWidth = false, withBackground = false }: PropTypes) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const theme: ThemeType = useTheme();

  const onChangeHandler = (newSelectedValue: ValueType) => {
    if (selectedValue === newSelectedValue) return;
    setSelectedValue(newSelectedValue);
    onChange(newSelectedValue);
  };

  return (
    <Box
      p={12}
      bg={withBackground ? theme.colors.surfaces.bg92 : theme.colors.common.transparent}
      borderRadius={8}
      display="inline-flex"
      w={fullWidth ? '100%' : 'content'}
      sx={{
        ...buttonGroupMarginStyles,
      }}
    >
      {options.map(({ label, value }) => (
        <Button
          selected={selectedValue === value}
          key={value}
          onClick={() => onChangeHandler(value)}
          variant={BUTTON_VARIANT.ghost}
          sx={{ mr: 12, flexGrow: fullWidth ? 1 : 'initial' }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};
