import React, { FC, useEffect, useMemo } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { User } from './Users';

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).max(16).required()
}).required();

export default const UserForm: FC<{
  recordForEdit: User;
  onClose: () => void;
  onSubmit: (values: User) => void;
  open: boolean;
}> = ({ open, onClose, onSubmit, recordForEdit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<User>({
    defaultValues: useMemo(() => {
      return recordForEdit;
    }, [recordForEdit]),
    resolver: joiResolver(schema)
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
                  size="small"
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
                  size="small"
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
                  size="small"
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
                  size="small"
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
                  size="small"
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
