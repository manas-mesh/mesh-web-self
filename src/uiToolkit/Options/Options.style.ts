import styled from '@emotion/styled';
import { MenuList, MenuItem, Box } from '@chakra-ui/react';
import { ThemeType } from '@themes/clients/baseTheme';

export const Wrapper = styled(Box)`
  position: absolute;
`;

export const StyledMenuList = styled(MenuList)(({ theme }: { theme?: ThemeType }) => ({
  padding: '12px',
  borderRadius: '8px',
  border: 'none',
  background: theme?.colors.surfaces.bg92,
  boxShadow: theme?.shadows.light,
  maxHeight: '300px',
  overflow: 'auto',
}));

export const StyledMenuItem = styled(MenuItem)(
  ({ theme, selected, icon }: { theme?: ThemeType; selected?: boolean; icon?: any }) => ({
    padding: '5px 6px',
    paddingLeft: icon ? '6px' : '9px',
    height: '36px',
    borderRadius: '4px',
    background: selected ? theme?.colors.surfaces.bg98 : 'inherit',
  }),
);
