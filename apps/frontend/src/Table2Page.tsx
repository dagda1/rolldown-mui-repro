import type { JSX } from 'react';
import { Table2 } from '@repro/component-library';

export default function Table2Page(): JSX.Element {
  return (
    <Table2
      columns={[{ accessorKey: 'name', header: 'Name' }]}
      data={[{ name: 'Test' }]}
    />
  );
}
