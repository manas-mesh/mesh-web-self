import React, { FC, useState } from 'react';
import { Button } from '@uiToolkit/Button';
import { Options, valuetype } from '@uiToolkit/Options';
import { OptionItem } from '@uiToolkit/Options';
import { BUTTON_SIZE } from '@uiToolkit/Button/Button';
import { IconProps, Menu, MenuButton } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { Wrapper } from './ButtonSelect.style';
import { ExpandLess, ExpandMore } from '@assets/iconComponents';

//Button select proptypes
export interface ButtonSelectProps {
  isDisabled?: boolean;
  className?: string;
  options: OptionItem[];
  onChange: (selectedOption: OptionItem[]) => void;
  ButtonStartIcon?: FC<IconProps> | undefined;
  defaultItems?: OptionItem[];
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
    defaultItems.length > 0 ? defaultItems.map((item) => item.label).join(', ') : defaultButtonLabel,
  );
  const theme: ThemeType = useTheme();

  //onchange event handler
  const onChangeHandler = (items: OptionItem[]): void => {
    if (items.length > 0) {
      setButtonLabel(items.map((item) => item.label).join(', '));
    } else setButtonLabel(defaultButtonLabel);
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
        StartIcon={ButtonStartIcon}
        EndIcon={isOpen ? ExpandLess : ExpandMore}
        selected={isOpen}
      >
        {buttonLabel}
      </Button>
    );
  };
  return (
    <Wrapper className={className} {...props}>
      <Menu isOpen={isOpen} onClose={closeHandler} closeOnSelect={false}>
        <MenuButton as={RenderButton} />
        <Options
          allowMultipleSelect={allowMultipleSelect}
          defaultItems={defaultItems}
          options={options}
          onChange={onChangeHandler}
        />
      </Menu>
    </Wrapper>
  );
};
