import React, { FC, useState } from 'react';
import { TextBodyMedium } from 'uiToolkit/Typography';
import { StyledMenuList, StyledMenuItem, Wrapper } from './Options.style';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { BoxProps } from '@chakra-ui/react';

//value type
export type valuetype = number | string;

//type of each option item
export interface Optionitem {
  value: number | string;
  label: string;
  isDisabled?: boolean;
  StartIcon?: FC<any> | undefined;
}

//options proptype
export interface OptionsType {
  options: Optionitem[];
  onChange?: (item: Optionitem) => void;
  defaultValue?: valuetype;
}

//OPTIONS COMPONENT STARTS HERE
export const Options: FC<BoxProps & OptionsType> = ({ options = [], onChange, defaultValue, ...props }) => {
  const theme: ThemeType = useTheme();
  const [selectedOption, setSelectedOption] = useState<valuetype | undefined>(defaultValue);

  //onchange event handler
  const onChangeHandler = (item: Optionitem): void => {
    const { value } = item;
    setSelectedOption(value);
    if (onChange) onChange(item);
  };

  //render each item from the options list
  const renderItem = (item: Optionitem): JSX.Element => {
    const { label, value, isDisabled, StartIcon } = item;
    let iconProp;
    if (StartIcon) {
      iconProp = {
        icon: <StartIcon boxSize={'18px'} />,
      };
    }
    return (
      <StyledMenuItem
        key={value}
        value={value}
        isDisabled={isDisabled}
        selected={value === selectedOption}
        _hover={{ background: theme.colors.surfaces.bg96 }}
        onClick={() => onChangeHandler(item)}
        {...iconProp}
      >
        <TextBodyMedium>{label}</TextBodyMedium>
      </StyledMenuItem>
    );
  };
  return (
    <>
      <Wrapper {...props}>
        <StyledMenuList mt={'4px'}>{options.map((item: Optionitem) => renderItem(item))}</StyledMenuList>
      </Wrapper>
    </>
  );
};
