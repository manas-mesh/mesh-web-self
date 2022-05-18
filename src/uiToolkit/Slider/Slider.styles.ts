import styled from '@emotion/styled';
import { SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, background } from '@chakra-ui/react';
import { baseTheme } from '../../themes/clients/baseTheme';

export const SliderTrackWrapper = styled(SliderTrack)`
  height: 20px;
  border: none;
  border-radius: 4px;
  background: ${baseTheme.colors.surfaces.g86};
`;

export const SliderTrackWrapper2 = styled(SliderTrack)(({ theme, ...props }: any) => ({
  height: '20px',
  border: 'none',
  borderRadius: '4px',
  background: theme.colors.surfaces.g86,
}));

export const SliderThumbWrapper = styled(SliderThumb)`
  height: 28px;
  width: 28px;
  border-radius: 4px;
  background: ${baseTheme.colors.surfaces.bg40};
`;

export const SliderFilledTrackWrapper = styled(SliderFilledTrack)`
  background: ${baseTheme.colors.surfaces.gr100};
`;
