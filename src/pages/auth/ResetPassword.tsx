import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
            fullWidth
            id="email"
            label="New Password"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm New Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="mt-4 mb-4"
          >
            Reset Password
          </Button>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
