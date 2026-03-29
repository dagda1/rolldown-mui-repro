import type { JSX } from 'react';
import Box from '@mui/material/Box';
import type { MaterialReactTableProps, MRT_RowData } from 'material-react-table';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';


interface Table2BaseProps<TData extends MRT_RowData> {
  data: TData[];
}

type Table2Props<TData extends MRT_RowData> = MaterialReactTableProps<TData> &
  Table2BaseProps<TData>

export function Table2<TData extends MRT_RowData>({
  columns,
  data,
}: Table2Props<TData>): JSX.Element {
  const table = useMaterialReactTable<TData>({
    enableColumnFilters: false,
    enableSortingRemoval: false,
    enablePagination: false,
    enableExpandAll: false,
    enableDensityToggle: false,
    enableExpanding: false,
    columns,
    data,
  });

  return (
    <Box>
      <MaterialReactTable<TData> table={table} />
    </Box>
  );
}
