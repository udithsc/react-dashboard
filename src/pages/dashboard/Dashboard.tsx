import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import SideBar from './SideBar';

function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => setOpen(!open);
  const theme = useTheme();

  return (
    <Box className="flex">
      <AppBar open={open} toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        className={`h-screen overflow-auto flex-grow ${
          theme.palette.mode === 'light' ? 'bg-gray-100' : 'bg-gray-900'
        }`}
      >
        <Toolbar />
        <Container className="max-w-screen-xl my-8">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
