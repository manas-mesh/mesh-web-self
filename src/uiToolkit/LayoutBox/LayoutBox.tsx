import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

type ColSpanType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
const TransientProps = ['colSpan'];

type Props = {
  colSpan: ColSpanType;
  theme?: any;
};

export const LayoutBox = styled(Box, {
  shouldForwardProp: (prop: string) => !TransientProps.includes(prop),
})`
  width: calc(${({ theme, colSpan }: Props) => `${theme.layout.colWidth} * ${colSpan}`});
`;
