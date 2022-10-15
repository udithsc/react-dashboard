import React from 'react';
import { styled } from '@mui/material/styles';
import { Toolbar, Typography, IconButton, Badge } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { FiBell, FiUser } from 'react-icons/fi';

import { DRAWER_WIDTH } from '../constants/template';
import { useNavigate } from 'react-router-dom';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

function AppBar({ open, toggleDrawer }: { open?: boolean; toggleDrawer: () => void }) {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  }));

  const navigate = useNavigate();

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar className="pr-6">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          className={`mr-8 ${open && 'hidden'}`}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <FiBell />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          sx={{ backgroundColor: 'primary.light', ml: 2 }}
          onClick={() => {
            navigate('signin');
          }}
        >
          <FiUser />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppBar;
