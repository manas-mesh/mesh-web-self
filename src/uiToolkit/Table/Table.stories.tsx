import { useMemo } from 'react';
import { Story } from '@storybook/react';

import Table from './Table';
import type { TableProps } from './Table';

const TableStory = {
  title: 'Core Components/Table',
  component: Table,
};

const TableTemplate: Story<TableProps> = (args) => {
  const data = useMemo(
    () => [
      {
        fromUnit: 'inches',
        toUnit: 'millimetres (mm)',
        factor: 25.4,
      },
      {
        fromUnit: 'feet',
        toUnit: 'centimetres (cm)',
        factor: 30.48,
      },
      {
        fromUnit: 'yards',
        toUnit: 'metres (m)',
        factor: 0.91444,
      },
    ],
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'To convert',
        accessor: 'fromUnit',
      },
      {
        Header: 'Into',
        accessor: 'toUnit',
      },
      {
        Header: 'Multiply by',
        accessor: 'factor',
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

export default TableStory;
