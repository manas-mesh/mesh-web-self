import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ThemeType } from '@themes/clients/baseTheme';
import { Listitem } from '@uiToolkit/Listitem';
import React, { FC, useState } from 'react';

const Wrapper = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  padding: '8px',
  paddingRight: '0px',
  background: theme?.colors.surfaces.g94,
  display: 'flex',
  borderRadius: '8px',
}));

type valueType = number | string;

type itemProp = {
  title: string;
  subTitle: string;
  value: valueType;
};

export interface ListItemTabBarSelectProps {
  items: itemProp[];
  itemStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  value: valueType;
  onChange: (newSelectedValue: valueType) => void;
}

export const ListItemTabBarSelect: FC<ListItemTabBarSelectProps> = ({ onChange, value, style, items, itemStyle }) => {
  const defaultItemStyle: React.CSSProperties = {
    minWidth: '176px',
    marginBottom: '0px',
    marginRight: '8px',
    flexGrow: 1,
    ...itemStyle,
  };
  const [selectedValue, setSelectedValue] = useState(value);

  const handleClick = (newSelectedValue: valueType) => {
    if (selectedValue === newSelectedValue) return;
    setSelectedValue(newSelectedValue);
    onChange(newSelectedValue);
  };

  return (
    <Wrapper style={style}>
      {items.map((item, index) => (
        <Listitem
          onClick={() => {
            handleClick(item.value);
          }}
          active={selectedValue === item.value}
          style={defaultItemStyle}
          key={index}
          title={item.title}
          subTitle={item.subTitle}
        />
      ))}
    </Wrapper>
  );
};
