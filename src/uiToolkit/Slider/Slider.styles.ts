import styled from '@emotion/styled';
import { SliderTrack, SliderFilledTrack, SliderThumb, Box, Slider } from '@chakra-ui/react';
import { ThemeType } from '@themes/clients/baseTheme';
import Textarea from '@uiToolkit/Textarea';

export const Wrapper = styled(Box)`
  display: flex;
  gap: 24px;
  min-width: 235px;
  margin: 12px;
  align-items: center;
`;

export const TextareaWrapper = styled(Textarea)`
  max-width: 85px;
  min-width: 50px;
  textarea {
    text-align: center;
    z-index: 3;
  }
`;

export const SliderWrapper = styled(Slider)(({ theme }: { theme?: ThemeType }) => ({
  width: '100%',
  '&[aria-disabled]': {
    opacity: 1,
  },
}));

export const SliderTrackWrapper = styled(SliderTrack)(({ theme }: { theme?: ThemeType }) => ({
  height: '20px',
  border: 'none',
  overflow: 'hidden',
  borderRadius: '4px',
  background: theme.colors.surfaces.g86,
  '&[data-disabled]': {
    background: theme.colors.surfaces.g86,
  },
}));

export const SliderThumbWrapper = styled(SliderThumb)(({ theme }: { theme?: ThemeType }) => ({
  height: '28px',
  width: '28px',
  padding: '4px',
  display: 'flex',
  border: 'none',
  justifyContent: 'center',
  WebkitJustifyContent: 'center',
  alignItems: 'center',
  WebkitAlignItems: 'center',
  transform: 'translateY(-50%)',
  borderRadius: '4px',
  background: theme.colors.surfaces.bg40,

  '&:hover': {
    background: theme.colors.surfaces.bg96,
    path: {
      fill: theme.colors.surfaces.bg40,
    },
    border: `1px solid ${theme.colors.surfaces.t48}`,
  },
  '&:active': {
    border: 'none',
    background: theme.colors.surfaces.white,
    path: {
      fill: theme.colors.surfaces.bg40,
    },
  },
  '&[aria-disabled]': {
    border: 'none',
    background: theme.colors.surfaces.bg40,
    path: {
      fill: theme.colors.surfaces.bg60,
    },
  },
}));

export const SliderFilledTrackWrapper = styled(SliderFilledTrack)(({ theme }: { theme?: ThemeType }) => ({
  background: theme.colors.surfaces.gr100,
  height: 'inherit',
}));
