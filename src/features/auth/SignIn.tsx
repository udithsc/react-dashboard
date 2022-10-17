import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Paper
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
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

export default function SignIn() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: joiResolver(schema)
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="flex flex-col items-center mt-24 shadow-xl" sx={{ py: 2, borderRadius: 2 }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-2"
          sx={{ width: '90%' }}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email Address"
                autoComplete="email"
                autoFocus
                required
                error={errors.email && true}
                helperText={errors.email?.message}
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
                label="Password"
                type="password"
                autoComplete="current-password"
                required
                error={errors.password && true}
                helperText={errors.password?.message}
                size="small"
              />
            )}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" className="mt-4 mb-4">
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Copyright />
    </Container>
  );
}
