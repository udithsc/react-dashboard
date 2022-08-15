import * as React from 'react';
import Controls from './components/controls/Controls';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';

export default function App() {
  // return <ResetPassword />;
  // return <ForgotPassword />;
  // return <SignUp />;
  // return <SignIn />;
  // return <Dashboard />;
  return (
    <>
      <Controls.Button
        isIconButton
        styles={{ backgroundColor: 'red' }}
        handleClick={() => console.log('icon button clicked')}
      >
        <DeleteIcon />
      </Controls.Button>
      <Controls.Button
        text="Submit"
        styles={{ backgroundColor: 'secondary.main' }}
        handleClick={() => console.log('normal button clicked')}
      />
    </>
  );
}
