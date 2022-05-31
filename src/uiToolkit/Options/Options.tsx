import { FC, useState } from 'react';
import { TextBodyMedium } from 'uiToolkit/Typography';
import { StyledMenuList, StyledMenuItem, Wrapper, StyledHeader } from './Options.style';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { Box, BoxProps } from '@chakra-ui/react';
import { Collapse } from '@chakra-ui/react';
import { ExpandLess, ExpandMore, Tick } from '@assets/iconComponents';

//value type
export type valuetype = number | string;

//type of each option item
export interface OptionItem {
  value: valuetype;
  label: string;
  isDisabled?: boolean;
  StartIcon?: FC<any> | undefined;
  isNested?: boolean;
  subItems?: OptionItem[];
}

//sample nested options data structure
// const options:OptionItem[] = [{label:'parent1',isNested:true,value:3,
// subItems:[
//{ label:'child1',isNested:false,value:2}
//]
//},
//{label:'parent2',isNested:false,value:1}
//]

//options proptype
export interface OptionsTypeProps {
  options: OptionItem[];
  onChange?: (items: valuetype[]) => void;
  defaultValues?: valuetype[];
  allowMultipleSelect?: boolean;
}

type RenderItemProps = {
  item: OptionItem;
  index: number;
  renderMenuListItem: Function;
};

//SUPPORTING COMPONENT
const RenderItem = ({ item, index, renderMenuListItem }: RenderItemProps): JSX.Element => {
  const theme: ThemeType = useTheme();
  const [show, setShow] = useState<boolean>(false);
  const { label, value, isNested = false, subItems = [] } = item;
  const EndIcon: any = () => {
    if (show) {
      return <ExpandLess boxSize={'18px'} />;
    }
    return <ExpandMore boxSize={'18px'} />;
  };
  //toggle header function for nested options
  const toggleHeader = (): void => {
    setShow(!show);
  };
  if (isNested && subItems?.length > 0) {
    return (
      <>
        <StyledHeader onClick={toggleHeader} _hover={{ background: theme.colors.surfaces.bg94 }}>
          <TextBodyMedium fontWeight={500}>{label}</TextBodyMedium>
          <EndIcon />
        </StyledHeader>

        <Collapse in={show} animateOpacity>
          {subItems.map((item, index) => renderMenuListItem(item, index))}
        </Collapse>
      </>
    );
  }
  return renderMenuListItem(item, index);
};

//OPTIONS COMPONENT STARTS HERE
export const Options: FC<BoxProps & OptionsTypeProps> = ({
  options = [],
  onChange,
  defaultValues = [],
  allowMultipleSelect = false,
  ...props
}) => {
  const theme: ThemeType = useTheme();
  const [selectedOption, setSelectedOption] = useState<valuetype[]>(defaultValues);

  //onchange event handler
  const onChangeHandler = (item: OptionItem): void => {
    const { value } = item;
    let updatedOptions;
    if (!allowMultipleSelect) {
      updatedOptions = [value];
    } else if (isOptionSelected(value, selectedOption)) {
      updatedOptions = selectedOption.filter((option) => option !== value);
    } else {
      updatedOptions = [...selectedOption, value];
    }
    setSelectedOption(updatedOptions);
    if (onChange) onChange(updatedOptions);
  };

  //function to check if given value is checked/unchecked
  const isOptionSelected = (value: valuetype, selectedOption: valuetype[]): boolean => {
    const found = selectedOption.includes(value);
    return found;
  };

  //render each option object
  const renderMenuListItem = (item: OptionItem, index: number): JSX.Element => {
    const { label, value, isDisabled, StartIcon } = item;
    let iconProp;
    if (StartIcon) {
      iconProp = {
        icon: <StartIcon boxSize={'18px'} />,
      };
    }
    return (
      <StyledMenuItem
        key={index}
        isDisabled={isDisabled}
        selected={isOptionSelected(value, selectedOption)}
        _hover={{ background: theme.colors.surfaces.bg96 }}
        onClick={() => onChangeHandler(item)}
        {...iconProp}
      >
        <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
          <TextBodyMedium>{label}</TextBodyMedium>
          {isOptionSelected(value, selectedOption) && <Tick mr={'2px'} boxSize={'18px'} />}
        </Box>
      </StyledMenuItem>
    );
  };

  return (
    <Wrapper {...props}>
      <StyledMenuList mt={'4px'}>
        {options.map((item: OptionItem, index: number) => (
          <RenderItem key={index} item={item} index={index} renderMenuListItem={renderMenuListItem} />
        ))}
      </StyledMenuList>
    </Wrapper>
  );
};
