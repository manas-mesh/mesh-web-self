// Libraries
import styled from '@emotion/styled';
import { Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

// UIKit
import { Button } from '@uiToolkit/Button';

export const TableWrapper = styled(Box)`
  background: ${(props) => props.theme.colors.surfaces.g94};
  border-radius: 12px;
  padding: 12px;
`;

export const StyledThead = styled(Thead)`
  background: ${(props) => props.theme.colors.surfaces.bg92};
  border-radius: 8px;
`;

export const StyledTh = styled(Th)`
  text-transform: inherit;

  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }

  &:last-of-type {
    border-radius: 0 8px 8px 0;
  }
`;

export const StyledTbody = styled(Tbody)`
  &::before {
    content: '';
    height: 12px;
    display: table-row;
  }
`;

export const StyledBodyTr = styled(Tr)`
  border-radius: 8px;

  &:hover {
    background: ${(props) => props.theme.colors.surfaces.t48};
  }
`;

export const StyledTd = styled(Td)`
  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }

  &:last-of-type {
    border-radius: 0 8px 8px 0;
  }
`;

export const SortOption = styled.span`
  margin-left: 8px;
`;

export const StyledButton = styled(Button)`
  margin-top: 24px;
`;
