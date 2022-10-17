import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef, MRT_Row } from 'material-react-table';
import type { ColumnFiltersState, PaginationState, SortingState } from '@tanstack/react-table';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import UserForm from './UserForm';
import { loadUsers } from './userSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export type User = {
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
};

const initialValues = {
  name: '',
  username: '',
  email: '',
  website: '',
  phone: ''
};

export default function Example() {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5
  });
  const [rowCount, setRowCount] = useState(0);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState<User>(initialValues);

  const handleCreateNewRow = (values: User) => {};
  const handleDeleteRow = (row: MRT_Row<User>) => {};

  useEffect(() => {
    dispatch(loadUsers());
  }, [columnFilters, globalFilter, pagination.pageIndex, pagination.pageSize, sorting]);

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name'
      },
      {
        accessorKey: 'username',
        header: 'User Name'
      },
      {
        accessorKey: 'email',
        header: 'Email'
      },
      {
        accessorKey: 'website',
        header: 'Website'
      },
      {
        accessorKey: 'phone',
        header: 'Phone Number'
      }
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={data}
        getRowId={(row) => row.phone}
        initialState={{
          showColumnFilters: false
        }}
        manualFiltering
        manualPagination
        manualSorting
        onColumnFiltersChange={setColumnFilters}
        onGlobalFilterChange={setGlobalFilter}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        rowCount={rowCount}
        state={{
          columnFilters,
          globalFilter,
          isLoading,
          pagination,
          sorting
        }}
        enableDensityToggle={false}
        enableHiding={false}
        enableRowActions
        renderTopToolbarCustomActions={() => (
          <Button onClick={() => setCreateModalOpen(true)} variant="contained">
            Create New User
          </Button>
        )}
        positionActionsColumn="last"
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center'
            }
          }
        }}
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
      />
      <UserForm
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
}
