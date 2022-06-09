// Libraries
import { useTable, Column, useSortBy } from 'react-table';
import { Table as ChakraTable, Tr } from '@chakra-ui/react';

// UIKit
import { BUTTON_VARIANT } from '@uiToolkit/Button/Button';

// Typography
import { TextLabelSmall, TextBodyMedium } from '@uiToolkit/Typography';

// Hooks
import useInfiniteLoading from '@hooks/useInfiniteLoading';

// Skeleton
import TableSkeleton from './Table.Skeleton';

// Icons
import { TableSort } from '@iconComponents';

// Styles
import {
  TableWrapper,
  StyledThead,
  StyledTh,
  StyledTbody,
  StyledBodyTr,
  StyledTd,
  SortOption,
  StyledButton,
} from './Table.styles';

export type TableProps = {
  data: any[];
  columns: Column[];
  withSorting?: boolean;
  showMoreRowsBtn?: boolean;
  onShowMoreRowsBtnClick?: React.MouseEventHandler<HTMLButtonElement>;
  moreRowsCount?: number;
  withInfiniteLoading?: boolean;
  canLoadMore?: boolean;
  isLoading?: boolean;
  onLoadMore?: () => void;
};

const Table: React.FC<TableProps> = ({
  data,
  columns,
  withSorting,
  showMoreRowsBtn,
  onShowMoreRowsBtnClick,
  moreRowsCount = 0,
  withInfiniteLoading = false,
  canLoadMore = false,
  isLoading = false,
  onLoadMore,
}) => {
  const loadingTriggerRef = useInfiniteLoading({
    isLoading: isLoading,
    canLoadMore: canLoadMore,
    onLoadMore: onLoadMore,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data, disableSortBy: !withSorting },
    useSortBy,
  );

  const displayMoreRowsBtn = showMoreRowsBtn && moreRowsCount > 0;

  return (
    <TableWrapper>
      <ChakraTable {...getTableProps()}>
        <StyledThead>
          {headerGroups.map((headerGroup) => (
            // key prop is provided by destructuring
            // eslint-disable-next-line react/jsx-key
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <StyledTh {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <TextLabelSmall>
                    {column.render('Header')}
                    <SortOption>{withSorting ? <TableSort /> : null}</SortOption>
                  </TextLabelSmall>
                </StyledTh>
              ))}
            </Tr>
          ))}
        </StyledThead>
        <StyledTbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // key prop is provided by destructuring
              // eslint-disable-next-line react/jsx-key
              <StyledBodyTr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  // eslint-disable-next-line react/jsx-key
                  <StyledTd {...cell.getCellProps()}>
                    <TextBodyMedium>{cell.render('Cell')}</TextBodyMedium>
                  </StyledTd>
                ))}
              </StyledBodyTr>
            );
          })}
        </StyledTbody>
      </ChakraTable>

      {withInfiniteLoading && canLoadMore && (
        <div ref={loadingTriggerRef}>
          <TableSkeleton cols={columns.length} />
        </div>
      )}

      {displayMoreRowsBtn && (
        <StyledButton variant={BUTTON_VARIANT.outlined} StartIcon={TableSort} onClick={onShowMoreRowsBtnClick}>
          {moreRowsCount} more rows
        </StyledButton>
      )}
    </TableWrapper>
  );
};

export default Table;
