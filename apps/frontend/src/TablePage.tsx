import type { JSX } from 'react';
import { Table } from '@repro/component-library';

export default function TablePage(): JSX.Element {
  return (
    <Table
      columns={[{ title: 'Name', field: 'name' }]}
      data={[{ name: 'Test' }]}
    />
  );
}
