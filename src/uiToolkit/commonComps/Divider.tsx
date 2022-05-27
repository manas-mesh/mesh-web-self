import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

// the hr element renders inconsistently, specially when there are a few together
// some could be one pixel
export const Divider = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.bg40};
`;
