import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { User } from './Users';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  })
  .required();

export const UserForm: FC<{
  recordForEdit: User;
  onClose: () => void;
  onSubmit: (values: User) => void;
  open: boolean;
}> = ({ open, onClose, onSubmit, recordForEdit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    defaultValues: useMemo(() => {
      return recordForEdit;
    }, [recordForEdit]),
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<User> = (data) => {
    onSubmit(data);
    onClose();
  };

  useEffect(() => reset(recordForEdit), [recordForEdit]);

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack sx={{ minWidth: { xs: '300px', sm: '360px', md: '400px' } }}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  error={errors.name && true}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="username"
                  error={errors.username && true}
                  helperText={errors.username?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  error={errors.email && true}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="website"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Website"
                  error={errors.website && true}
                  helperText={errors.website?.message}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone"
                  error={errors.phone && true}
                  helperText={errors.phone?.message}
                />
              )}
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit(submit)} variant="contained">
          {!recordForEdit.phone ? 'Create New Account' : 'Update Account'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
