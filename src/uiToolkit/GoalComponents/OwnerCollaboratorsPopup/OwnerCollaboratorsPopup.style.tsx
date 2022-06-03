import { Box, PopoverContent } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ThemeType } from '@themes/clients/baseTheme';

export const PopoverContentWrapper = styled(PopoverContent)(({ theme }: { theme?: ThemeType }) => ({
  background: theme?.colors.surfaces.bg92,
  borderRadius: '8px',
  boxShadow: theme?.shadows?.light,
  padding: '12px 2px',
  minWidth: '225px',
}));

export const Header = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  padding: '14px 12px',
  display: 'flex',
  justifyContent: 'space-between',
}));
