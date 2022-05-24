import { Box } from '@chakra-ui/react';
import { baseTheme } from '@themes/clients/baseTheme';
import { BaseStarRating } from '@uiToolkit/BaseStarRating/BaseStarRating';

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

export const Rating = ({ ...props }: RatingProps) => (
  <Box sx={{ background: baseTheme.colors.surfaces.bg92, padding: '12px', borderRadius: '8px', width: 'fit-content' }}>
    <BaseStarRating {...props} />
  </Box>
);
