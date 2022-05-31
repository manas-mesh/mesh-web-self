import { Box, Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ThemeType } from '@themes/clients/baseTheme';

const commonStyles = {
  padding: '8px',
};

export const FadeWrapper = styled(Fade)(({ theme }: { theme?: ThemeType }) => ({
  position: 'absolute',
  left: '50%',
  top: '40px',
  zIndex: 100,
  transform: 'translateX(-50%)',
  minWidth: '416px',
}));

export const Wrapper = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  ...commonStyles,
  width: '100%',
  background: theme?.colors.surfaces.bg94,
  borderRadius: '12px',
  boxShadow: theme?.shadows.light,
}));

export const Header = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  ...commonStyles,
  paddingRight: '12px',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const LeftSegment = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  ...commonStyles,
}));

export const RightSegment = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  ...commonStyles,
}));

export const AchievedWrapper = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  padding: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '8px',
}));

export const AddNoteWrapper = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginInline: '10px',
  marginTop: '8px',
}));

export const HelperTextWrapper = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  padding: '12px 21.5px',
  marginInline: '20px',
  marginTop: '8px',
  borderRadius: '8px',
  border: `1px dashed ${theme?.colors.border.bg40}`,
}));

export const FooterWrapper = styled(Box)(({ theme }: { theme?: ThemeType }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '24px',
  marginTop: '8px',
}));
