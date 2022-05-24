import { Box, chakra } from '@chakra-ui/react';
import { baseTheme } from '@themes/clients/baseTheme';
import { BaseStarRating } from '@uiToolkit/BaseStarRating/BaseStarRating';
import styled from '@emotion/styled';

interface RatingProps {
  precision?: number;
  maxRating: number;
  emptyIcon?: React.ReactNode;
  filledIcon?: React.ReactNode;
  rating: number;
  label?: string;
  disabled?: boolean;
  enableValidation?: boolean;
  isRequired?: boolean;
}
const Wrapper = chakra(Box, {
  baseStyle: {
    background: baseTheme.colors.surfaces.bg92,
    padding: '12px',
    borderRadius: '8px',
    width: 'fit-content',
    '&:focus': {
      background: baseTheme.colors.formFields.focusBg,
    },
  },
});

export const Rating = ({ ...props }: RatingProps) => (
  <Wrapper>
    <BaseStarRating {...props} />
  </Wrapper>
);
