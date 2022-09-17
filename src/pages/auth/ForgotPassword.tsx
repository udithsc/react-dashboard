import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../../components/common/Copyright';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
interface IFormInput {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
  })
  .required();

export default function ForgotPassword() {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        className="flex flex-col items-center mt-16"
        sx={{ border: 2, p: 2, borderRadius: 2, borderColor: 'primary.main' }}
      >
        <Avatar className={`m-1 bg-[${theme.palette.secondary.main}]`}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-2"
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
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="mt-4 mb-4"
          >
            Send Email
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/signin" variant="body2">
                Sign In?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
