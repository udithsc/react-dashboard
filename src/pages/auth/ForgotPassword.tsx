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
  Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../../components/common/Copyright';
import { useTheme } from '@mui/material/styles';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
interface IFormInput {
  email: string;
}

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).max(16).required(),
}).required();

export default function ForgotPassword() {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        className="flex flex-col items-center mt-24 shadow-xl"
        sx={{ borderRadius: 2 }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
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
                size="small"
              />
            )}
          />
          <Button type="submit" fullWidth variant="contained" className="my-4">
            Send Email
          </Button>
          <Grid container className="mb-2">
            <Link href="/signin" variant="body2">
              Back
            </Link>
          </Grid>
        </Box>
      </Paper>
      <Copyright />
    </Container>
  );
}
