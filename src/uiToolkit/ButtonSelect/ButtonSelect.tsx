import React, { FC, useState } from 'react';
import { Button } from '@uiToolkit/Button';
import { Options, valuetype } from '@uiToolkit/Options';
import { Optionitem } from '@uiToolkit/Options';
import { BUTTON_SIZE } from '@uiToolkit/Button/Button';
import { Menu, MenuButton } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { Wrapper } from './ButtonSelect.style';
import { ExpandLess, ExpandMore } from '@assets/iconComponents';

//Button select proptypes
export interface ButtonSelectProps {
  isDisabled?: boolean;
  className?: string;
  options: Optionitem[];
  onChange: (selectedOption: Optionitem) => void;
  ButtonStartIcon?: FC<any> | undefined;
  defaultLabel?: string;
  defaultValue?: valuetype;
  buttonSelectStyle?: React.CSSProperties;
}

//BUTTON SELECT COMPONENT STARTS HERE
export const ButtonSelect: FC<ButtonSelectProps> = ({
  isDisabled = false,
  className = '',
  options = [],
  onChange,
  defaultValue,
  ButtonStartIcon,
  defaultLabel = 'Select',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState(defaultLabel);
  const theme: ThemeType = useTheme();

  const EndIcon: any = () => {
    if (isOpen) {
      return <ExpandLess boxSize={'18px'} color={theme.colors.surfaces.white} />;
    }
    return <ExpandMore boxSize={'18px'} color={theme.colors.surfaces.white} />;
  };
  const StartIcon: any = () => {
    if (ButtonStartIcon) {
      return <ButtonStartIcon boxSize={'24px'} color={theme.colors.surfaces.white} />;
    }
  };

  //onchange event handler
  const onChangeHandler = (item: Optionitem): void => {
    const { label } = item;
    setButtonLabel(label);
    if (onChange) onChange(item);
  };

  //menu onclose handler
  const closeHandler = (): void => {
    setIsOpen(false);
  };

  //Menubutton to be rendered
  const RenderButton = (): JSX.Element => {
    const clickHandler = (): void => {
      setIsOpen(!isOpen);
    };
    return (
      <Button
        size={BUTTON_SIZE.large}
        onClick={clickHandler}
        isDisabled={isDisabled}
        StartIcon={StartIcon}
        EndIcon={EndIcon}
        selected={isOpen}
      >
        {buttonLabel}
      </Button>
    );
  };
  return (
    <>
      <Wrapper className={className} {...props}>
        <Menu isOpen={isOpen} onClose={closeHandler}>
          <MenuButton as={RenderButton} />
          <Options defaultValue={defaultValue} options={options} onChange={onChangeHandler} />
        </Menu>
      </Wrapper>
    </>
  );
};
