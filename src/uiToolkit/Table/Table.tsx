// Libraries
import { useState, useEffect, useRef } from 'react';
import { useTable, Column, useSortBy } from 'react-table';
import { Table as ChakraTable, Tr } from '@chakra-ui/react';

// UIKit
import { BUTTON_VARIANT } from '@uiToolkit/Button/Button';

// Typography
import { TextLabelSmall, TextBodyMedium } from '@uiToolkit/Typography';

// Hooks
import useIntersectionObserver from '@hooks/useIntersectionObserver';

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
  infiniteLoading?: boolean;
  rowsPerPage?: number;
};

const Table: React.FC<TableProps> = ({
  data,
  columns,
  withSorting,
  showMoreRowsBtn,
  onShowMoreRowsBtnClick,
  moreRowsCount = 0,
  infiniteLoading = false,
  rowsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(false);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data, disableSortBy: !withSorting },
    useSortBy,
  );

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const loaderObserver = useIntersectionObserver(loaderRef, {});

  const displayMoreRowsBtn = showMoreRowsBtn && moreRowsCount > 0;

  useEffect(() => {
    if (canLoadMore && loaderObserver?.isIntersecting) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [canLoadMore, loaderObserver]);

  useEffect(() => {
    if (infiniteLoading && rows.length > rowsPerPage * currentPage) {
      setCanLoadMore(true);
    } else {
      setCanLoadMore(false);
    }
  }, [currentPage, rowsPerPage, infiniteLoading, rows.length]);

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
          {infiniteLoading
            ? rows.slice(0, rowsPerPage * currentPage).map((row) => {
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
              })
            : rows.map((row) => {
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

      {displayMoreRowsBtn && (
        <StyledButton variant={BUTTON_VARIANT.outlined} StartIcon={TableSort} onClick={onShowMoreRowsBtnClick}>
          {moreRowsCount} more rows
        </StyledButton>
      )}

      {infiniteLoading && <div ref={loaderRef}></div>}
    </TableWrapper>
  );
};

export default Table;
