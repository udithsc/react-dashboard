import React from 'react';
import { Avatar, Button, TextField, Box, Typography, Container, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import Copyright from '../../components/Copyright';

interface IFormInput {
  email: string;
  password: string;
}

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).max(16).required()
}).required();

export default function ResetPassword() {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: joiResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="flex flex-col items-center mt-16" sx={{ p: 2, borderRadius: 2 }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate className="mt-2">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="New Password"
                type="password"
                required
                error={errors.password && true}
                helperText={errors.password?.message}
                size="small"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm New Password"
                type="password"
                required
                error={errors.password && true}
                helperText={errors.password?.message}
                size="small"
              />
            )}
          />

          <Button type="submit" variant="contained" className="mt-4 mb-4" fullWidth>
            Reset Password
          </Button>
        </Box>
      </Paper>
      <Copyright />
    </Container>
  );
}
