import { Box } from '@chakra-ui/react';
import { BaseStarRating, RatingPropsI } from '@uiToolkit/BaseStarRating/BaseStarRating';
import styled from '@emotion/styled';
import { ThemeType } from '@themes/clients/baseTheme';

const Wrapper = styled(Box)(({ theme }: { theme: ThemeType }) => ({
  baseStyle: {
    background: theme.colors.surfaces.bg92,
    padding: '12px',
    borderRadius: '8px',
    width: 'fit-content',
    '&:focus': {
      background: theme.colors.formFields.focusBg,
    },
  },
}));

export const Rating = ({ ...props }: RatingPropsI) => (
  <Wrapper>
    <BaseStarRating {...props} />
  </Wrapper>
);
