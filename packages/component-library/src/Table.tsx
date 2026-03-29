import type { Column } from '@material-table/core';
import MuiTable from '@material-table/core';
import Box from '@mui/material/Box';

interface TableProps {
  columns: Column<object>[];
  data: object[];
}

export function Table({ columns, data }: TableProps): JSX.Element {
  return (
    <Box>
      <MuiTable columns={columns} data={data} title="Table" />
    </Box>
  );
}
