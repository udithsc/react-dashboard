import React from 'react';
import { Box, Toolbar, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import SideBar from './SideBar';

function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => setOpen((state) => !state);

  return (
    <Box className="flex">
      <AppBar open={open} toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
      <Box className="w-full p-4">
        <Toolbar />
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
