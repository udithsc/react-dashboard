import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Box, Toolbar, List, Divider, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Copyright from './Copyright';
import { DRAWER_WIDTH } from '../constants/template';
import ListItems from './listItems';

type SideBarProps = {
  open: boolean;
  toggleDrawer: () => void;
};

function SideBar({ open, toggleDrawer }: SideBarProps) {
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
  })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      height: '100vh',
      position: 'relative',
      whiteSpace: 'nowrap',
      borderRight: 'none',
      width: DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7)
        }
      }),
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'
    },
    '& .MuiListItemButton-root:hover': {
      backgroundColor: '#f9eef0'
    }
  }));

  return (
    <Drawer variant="permanent" open={open} elevation={1}>
      <Toolbar
        className="flex items-center justify-end px-1"
        sx={{ backgroundColor: 'primary.main' }}
      >
        <img src="/logo-1.png" alt="logo" height="45%" />
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <ListItems type="main" />
        <Divider className="my-2" />
        <ListItems type="sub" />
      </List>
      <Box
        sx={{
          display: open ? 'flex' : 'none',
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: '100%',
          mb: 4
        }}
      >
        <Copyright />
      </Box>
    </Drawer>
  );
}

export default SideBar;
