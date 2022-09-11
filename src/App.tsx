import { Box, Button, TextField, Autocomplete } from '@mui/material';
import React, { useState } from 'react';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';

export default function App() {
  // return <ResetPassword />;
  // return <ForgotPassword />;
  // return <SignUp />;
  // return <SignIn />;
  // return <Dashboard />;

  return (
    <Box sx={{ p: 10 }}>
      {/* <Button variant="contained">Contained</Button> */}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        error
        // helperText="required  dhjlsfhlds fdshlhfld slfhdsl fldshfldslfhdsl fldsjhklfj"
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={['ddd', 'ddds']}
        renderInput={(params) => (
          <TextField {...params} label="Movie" error helperText="dsfd" />
        )}
      />
    </Box>
  );
}
