import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Box, Toolbar, List, Divider, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import Copyright from '../../components/common/Copyright';
import { DRAWER_WIDTH } from '../../constants/template';
import { grey } from '@mui/material/colors';

function SideBar({
  open,
  toggleDrawer,
}: {
  open?: boolean;
  toggleDrawer: () => void;
}) {
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      borderRight: 'none',
      width: DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7),
        },
      }),
    },
    '& .MuiListItemButton-root:hover': {
      backgroundColor: grey[200],
    },
  }));

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        className="flex items-center justify-end px-1"
        sx={{ backgroundColor: 'primary.main' }}
      >
        <img
          src="https://techventuras.com/wp-content/uploads/2022/03/logo-1.png"
          height={'45%'}
        />
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider className="my-2" />
        {secondaryListItems}
      </List>
      <Box
        sx={{
          display: open ? 'flex' : 'none',
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: '100%',
          mb: 4,
        }}
      >
        <Copyright />
      </Box>
    </Drawer>
  );
}

export default SideBar;
