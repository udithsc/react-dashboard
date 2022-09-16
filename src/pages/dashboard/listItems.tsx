import React from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import {
  FiGrid,
  FiBook,
  FiChrome,
  FiFileMinus,
  FiMail,
  FiSlack,
  FiSliders,
} from 'react-icons/fi';

const MainMenus = [
  {
    label: 'Dashboard',
    icon: <FiGrid />,
    route: '/dashboard',
  },
  {
    label: 'Orders',
    icon: <FiBook />,
    route: '/orders',
  },
  {
    label: 'Customers',
    icon: <FiChrome />,
    route: '/customers',
  },
  {
    label: 'Reports',
    icon: <FiChrome />,
    route: '/reports',
  },
  {
    label: 'Integrations',
    icon: <FiFileMinus />,
    route: '/integrations',
  },
];

const SecondaryMenus = [
  {
    label: 'Current month',
    icon: <FiMail />,
    route: '/dashboard',
  },
  {
    label: 'Last quarter',
    icon: <FiSlack />,
    route: '/orders',
  },
  {
    label: 'Year-end sale',
    icon: <FiSliders />,
    route: '/orders',
  },
];

export const mainListItems = (
  <React.Fragment>
    {MainMenus.map((menu) => (
      <ListItemButton>
        <ListItemIcon sx={{ fontSize: 20 }}>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.label} />
      </ListItemButton>
    ))}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    {SecondaryMenus.map((menu) => (
      <ListItemButton>
        <ListItemIcon sx={{ fontSize: 20 }}>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.label} />
      </ListItemButton>
    ))}
  </React.Fragment>
);
