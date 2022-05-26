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
  onChange: (selectedOption: Optionitem[]) => void;
  ButtonStartIcon?: FC<any> | undefined;
  defaultItems?: Optionitem[];
  buttonSelectStyle?: React.CSSProperties;
  allowMultipleSelect?: boolean;
}

//BUTTON SELECT COMPONENT STARTS HERE
export const ButtonSelect: FC<ButtonSelectProps> = ({
  isDisabled = false,
  className = '',
  options = [],
  onChange,
  defaultItems = [],
  ButtonStartIcon,
  allowMultipleSelect = false,
  ...props
}) => {
  const defaultButtonLabel = 'Select';
  const [isOpen, setIsOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState(
    defaultItems.length > 0 ? defaultItems.map((item) => item.label) : [defaultButtonLabel],
  );
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
  const onChangeHandler = (items: Optionitem[]): void => {
    if (items.length > 0) {
      setButtonLabel(items.map((item) => item.label));
    } else setButtonLabel([defaultButtonLabel]);
    if (onChange) onChange(items);
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
        {buttonLabel.join(', ')}
      </Button>
    );
  };
  return (
    <>
      <Wrapper className={className} {...props}>
        <Menu isOpen={isOpen} onClose={closeHandler} closeOnSelect={false}>
          <MenuButton as={RenderButton} />
          <Options
            allowMultipleSelect={allowMultipleSelect}
            defaultItems={defaultItems}
            options={options}
            onChange={(e) => onChangeHandler(e)}
          />
        </Menu>
      </Wrapper>
    </>
  );
};
