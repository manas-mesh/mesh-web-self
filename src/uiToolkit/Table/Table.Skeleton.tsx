// Libraries
import styled from '@emotion/styled';
import { Box, Skeleton } from '@chakra-ui/react';

const StyledBox = styled(Box)`
  margin-top: 12px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  grid-gap: 15px;
`;

export type TableSkeletonProps = {
  cols: number;
  rows?: number;
};

const DEFAULT_ROWS = 3;

const TableSkeleton: React.FC<TableSkeletonProps> = ({ cols, rows = DEFAULT_ROWS }) => (
  <StyledBox cols={cols} rows={rows}>
    {Array(rows * cols)
      .fill(0)
      .map((_, i) => (
        <Skeleton key={i} startColor="white" height="20px" />
      ))}
  </StyledBox>
);

export default TableSkeleton;
