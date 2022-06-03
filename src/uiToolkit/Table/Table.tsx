// Libraries
import { useTable, Column, useSortBy } from 'react-table';
import { Table as ChakraTable, Tr } from '@chakra-ui/react';

// Typography
import { TextLabelSmall, TextBodyMedium } from '@uiToolkit/Typography';

// Icons
import { TableSort } from '@iconComponents';

// Styles
import { TableWrapper, StyledThead, StyledTh, StyledTbody, StyledBodyTr, StyledTd, SortOption } from './Table.styles';

export type TableProps = {
  data: any[];
  columns: Column[];
  withSorting?: boolean;
};

const Table: React.FC<TableProps> = ({ data, columns, withSorting }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data, disableSortBy: !withSorting },
    useSortBy,
  );

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
    </TableWrapper>
  );
};

export default Table;
