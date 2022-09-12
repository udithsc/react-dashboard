import React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../../components/common/Copyright';
import { useTheme } from '@mui/material/styles';

export default function ResetPassword() {
  const theme = useTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className="flex flex-col items-center mt-16">
        <Avatar className={`m-1 bg-[${theme.palette.secondary.main}]`}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className="mt-2"
        >
          <TextField
            margin="normal"
            required
            id="email"
            label="New Password"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            name="password"
            label="Confirm New Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" variant="contained" className="mt-4 mb-4">
            Reset Password
          </Button>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
