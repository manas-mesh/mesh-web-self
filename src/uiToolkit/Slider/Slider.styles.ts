import styled from '@emotion/styled';
import { SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, background } from '@chakra-ui/react';
import { baseTheme } from '../../themes/clients/baseTheme';
import { ThemeType } from '@themes/clients/baseTheme';

// export const SliderTrackWrapper= styled(SliderTrack)`
//   height: 20px;
//   border: none;
//   border-radius: 4px;
//   background: ${baseTheme.colors.surfaces.g86};
// `;

export const SliderTrackWrapper = styled(SliderTrack)(({ theme }: ThemeType) => ({
  height: '20px',
  border: 'none',
  borderRadius: '4px',
  background: theme.colors.surfaces.g86,
}));

export const SliderThumbWrapper = styled(SliderThumb)(({ theme }: ThemeType) => ({
  height: '28px',
  width: '28px',
  borderRadius: '4px',
  background: theme.colors.surfaces.bg40,
}));

// export const SliderThumbWrapper = styled(SliderThumb)`
//   height: 28px;
//   width: 28px;
//   position: relative;
//   top: 0;
//   border-radius: 4px;
//   background: ${baseTheme.colors.surfaces.bg40};
// `;

export const SliderFilledTrackWrapper = styled(SliderFilledTrack)(({ theme }: ThemeType) => ({
  background: theme.colors.surfaces.gr100,
}));
