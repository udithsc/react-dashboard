import React, { FC, useCallback, useMemo, useState } from 'react';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_Cell,
  MRT_ColumnDef,
  MRT_Row,
} from 'material-react-table';
import { Box, Button, IconButton, MenuItem, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { data, states } from './makeData';
import { PeopleForm } from './PeopleForm';

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  state: string;
};

const initialValues = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  age: 18,
  state: '',
};

const Peoples: FC = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState<Person[]>(() => data);
  const [recordForEdit, setRecordForEdit] = useState<Person>(initialValues);

  const handleCreateNewRow = (values: Person) => {
    setRecordForEdit;
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleDeleteRow = useCallback(
    (row: MRT_Row<Person>) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 80,
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 140,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 140,
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'age',
        header: 'Age',
        size: 80,
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 100,
          },
        }}
        columns={columns}
        data={tableData}
        initialState={{ pagination: { pageSize: 5, pageIndex: 0 } }}
        renderRowActions={({ row }) => (
          <Box sx={{ display: 'flex' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton
                onClick={() => {
                  const { original: user } = row;
                  setRecordForEdit(user);
                  setCreateModalOpen(true);
                }}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button onClick={() => setCreateModalOpen(true)} variant="contained">
            Create New Account
          </Button>
        )}
        enableDensityToggle={false}
        enableHiding={false}
        positionActionsColumn="last"
        enableRowActions={true}
      />
      <PeopleForm
        recordForEdit={recordForEdit}
        open={createModalOpen}
        onClose={() => {
          setRecordForEdit(initialValues);
          setCreateModalOpen(false);
        }}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

export default Peoples;
