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
import { useNavigate } from 'react-router-dom';

const MainMenus = [
  {
    label: 'Dashboard',
    icon: <FiGrid />,
    route: '/dashboard',
  },
  {
    label: 'Users',
    icon: <FiChrome />,
    route: '/users',
  },
  {
    label: 'Orders',
    icon: <FiBook />,
    route: '/orders',
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

const SubMenus = [
  {
    label: 'Current month',
    icon: <FiMail />,
    route: '/dashboard2',
  },
  {
    label: 'Last quarter',
    icon: <FiSlack />,
    route: '/orders2',
  },
  {
    label: 'Year-end sale',
    icon: <FiSliders />,
    route: '/orders3',
  },
];

export default function ListItems({ type }: { type: string }) {
  const navigate = useNavigate();
  const Menus = type === 'main' ? MainMenus : SubMenus;

  return (
    <React.Fragment>
      {Menus.map((menu) => (
        <ListItemButton key={menu.route} onClick={() => navigate(menu.route)}>
          <ListItemIcon sx={{ fontSize: 20 }}>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.label} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
}
