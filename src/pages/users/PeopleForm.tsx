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
import { Person } from './Peoples';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  })
  .required();

export const PeopleForm: FC<{
  recordForEdit: Person;
  onClose: () => void;
  onSubmit: (values: Person) => void;
  open: boolean;
}> = ({ open, onClose, onSubmit, recordForEdit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Person>({
    defaultValues: useMemo(() => {
      return recordForEdit;
    }, [recordForEdit]),
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<Person> = (data) => {
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
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  error={errors.firstName && true}
                  helperText={errors.firstName?.message}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  error={errors.lastName && true}
                  helperText={errors.lastName?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email Address"
                  error={errors.email && true}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Age"
                  error={errors.age && true}
                  helperText={errors.age?.message}
                />
              )}
            />
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="State"
                  error={errors.state && true}
                  helperText={errors.state?.message}
                />
              )}
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit(submit)} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};
