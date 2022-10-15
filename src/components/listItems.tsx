import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FiGrid, FiBook, FiChrome, FiFileMinus, FiMail, FiSlack, FiSliders } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const MainMenus = [
  {
    label: 'Dashboard',
    icon: <FiGrid />,
    route: '/'
  },
  {
    label: 'Users',
    icon: <FiChrome />,
    route: '/users'
  },
  {
    label: 'Orders',
    icon: <FiBook />,
    route: '/'
  },
  {
    label: 'Reports',
    icon: <FiChrome />,
    route: '/'
  },
  {
    label: 'Integrations',
    icon: <FiFileMinus />,
    route: '/'
  }
];

const SubMenus = [
  {
    label: 'Current month',
    icon: <FiMail />,
    route: '/'
  },
  {
    label: 'Last quarter',
    icon: <FiSlack />,
    route: '/'
  },
  {
    label: 'Year-end sale',
    icon: <FiSliders />,
    route: '/'
  }
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
