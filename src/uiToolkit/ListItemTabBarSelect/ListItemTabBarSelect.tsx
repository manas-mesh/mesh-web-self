import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ThemeType } from '@themes/clients/baseTheme';
import Listitem, { ListitemProps } from '@uiToolkit/Listitem';
import React, { FC, useState } from 'react';

const Wrapper = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  padding: '8px',
  paddingRight: '0px',
  background: theme?.colors.surfaces.g94,
  display: 'flex',
}));

export interface ListItemTabBarSelectProps {
  items: ListitemProps[];
  itemStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

export const ListItemTabBarSelect: FC<ListItemTabBarSelectProps> = ({ style, items, itemStyle }) => {
  const a = 12;
  const [selectedValue, setSelectedValue] = useState();
  return (
    <Wrapper style={style}>
      {items.map((item, index) => (
        <Listitem style={itemStyle} key={index} {...item} />
      ))}
    </Wrapper>
  );
};
