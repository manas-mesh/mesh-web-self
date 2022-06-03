import { useMemo } from 'react';
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
  let tableData = mockData;

  if (args.infiniteLoading) {
    tableData = [...mockData, ...mockData, ...mockData, ...mockData, ...mockData, ...mockData, ...mockData];
  }

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

export const WithInfiniteLoading = TableTemplate.bind({});
WithInfiniteLoading.args = {
  infiniteLoading: true,
};

export default TableStory;
