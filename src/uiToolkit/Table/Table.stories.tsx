import { useMemo, useState } from 'react';
import { Story } from '@storybook/react';

import Table from './Table';
import type { TableProps } from './Table';

const TableStory = {
  title: 'Core Components/Table',
  component: Table,
};

const mockData = [
  {
    firstname: 'John',
    lastname: 'Doe',
    height: 180,
  },
  {
    firstname: 'Jane',
    lastname: 'Doe',
    height: 173,
  },
  {
    firstname: 'Richard',
    lastname: 'Roe',
    height: 175,
  },
  {
    firstname: 'Jane',
    lastname: 'Smith',
    height: 185,
  },
  {
    firstname: 'Richard',
    lastname: 'Smith',
    height: 165,
  },
];

const TableTemplate: Story<TableProps> = (args) => {
  const tableData = mockData;

  const data = useMemo(() => tableData, [tableData]);

  const columns = useMemo(
    () => [
      {
        Header: 'Firstname',
        accessor: 'firstname',
      },
      {
        Header: 'Lastname',
        accessor: 'lastname',
      },
      {
        Header: 'Height',
        accessor: 'height',
      },
    ],
    [],
  );

  return <Table data={data} columns={columns} {...args} />;
};

const InfiniteLoadingTableTemplate: Story<TableProps> = (args) => {
  const [tableData, setTableData] = useState(mockData);
  const [isLoading, setIsLoading] = useState(false);

  const onLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTableData((prevData) => [...prevData, ...mockData, ...mockData]);
      setIsLoading(false);
    }, 1000);
  };

  const data = useMemo(() => tableData, [tableData]);

  const columns = useMemo(
    () => [
      {
        Header: 'Firstname',
        accessor: 'firstname',
      },
      {
        Header: 'Lastname',
        accessor: 'lastname',
      },
      {
        Header: 'Height',
        accessor: 'height',
      },
    ],
    [],
  );

  return <Table data={data} columns={columns} {...args} onLoadMore={onLoadMore} isLoading={isLoading} />;
};

export const Basic = TableTemplate.bind({});
Basic.args = {};

export const WithSorting = TableTemplate.bind({});
WithSorting.args = {
  withSorting: true,
};

export const WithMoreRowsButton = TableTemplate.bind({});
WithMoreRowsButton.args = {
  showMoreRowsBtn: true,
  onShowMoreRowsBtnClick: () => alert('More rows button clicked'),
  moreRowsCount: 12,
};

export const WithInfiniteLoading = InfiniteLoadingTableTemplate.bind({});
WithInfiniteLoading.args = {
  withInfiniteLoading: true,
  canLoadMore: true,
};

export default TableStory;
