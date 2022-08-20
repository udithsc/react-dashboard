import React, { useState } from 'react';
import Controls from './components/controls/Controls';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { pink } from '@mui/material/colors';

export default function App() {
  // return <ResetPassword />;
  // return <ForgotPassword />;
  // return <SignUp />;
  // return <SignIn />;
  // return <Dashboard />;
  const [fname, setFname] = useState('');
  const [checked, setChecked] = useState(true);

  console.log(checked);

  return (
    <Box padding={3} display="flex" flexDirection="row" gap={1}>
      {/* <Controls.Button isIconButton>
        <DeleteIcon sx={{ color: 'red' }} />
      </Controls.Button>
      <Controls.Input
        label="name"
        // helperText="helper text"
        name="name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        // error
      />
      <Controls.Select
        name="name"
        label="name"
        value={fname}
        options={[
          { id: 1, title: 'a' },
          { id: 2, title: 'b' },
        ]}
        onChange={(e) => setFname(e.target.value as string)}
        // helperText="helper text"
        // error
      /> */}
      {/* <Controls.AutoComplete
        name="name"
        label="name"
        value={fname}
        options={[
          { id: 1, title: 'a' },
          { id: 2, title: 'b' },
        ]}
        onChange={(event: any, newValue: string | null) => {
          setFname(newValue as string);
        }}
      /> */}
      {/* <Controls.CheckBox
        label="registered"
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setChecked(event.target.checked);
        }}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      /> */}
      {/* <Controls.Radio
        label="gender"
        options={[
          { id: 1, title: 'male' },
          { id: 2, title: 'female' },
        ]}
      /> */}
      {/* <Controls.Switch label="label" /> */}
      {/* <Controls.Button
        onClick={() => console.log('normal button clicked')}
        sx={{ backgroundColor: 'red' }}
      >
        Button
      </Controls.Button> */}
    </Box>
  );
}
