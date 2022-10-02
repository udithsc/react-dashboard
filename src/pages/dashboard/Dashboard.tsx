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
      <Box>
        <Toolbar />
        <Container className="max-w-screen-xl my-8">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
