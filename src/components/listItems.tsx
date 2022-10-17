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
    route: '/orders'
  },
  {
    label: 'Reports',
    icon: <FiChrome />,
    route: '/reports'
  },
  {
    label: 'Integrations',
    icon: <FiFileMinus />,
    route: '/integrations'
  }
];

const SubMenus = [
  {
    label: 'Current month',
    icon: <FiMail />,
    route: '/current-month'
  },
  {
    label: 'Last quarter',
    icon: <FiSlack />,
    route: '/last-quarter'
  },
  {
    label: 'Year-end sale',
    icon: <FiSliders />,
    route: '/year-end-sale'
  }
];

type ListItemProps = {
  type: string;
};

export default function ListItems({ type }: ListItemProps) {
  const navigate = useNavigate();
  const Menus = type === 'main' ? MainMenus : SubMenus;

  return (
    <>
      {Menus.map((menu) => (
        <ListItemButton key={menu.route} onClick={() => navigate(menu.route)}>
          <ListItemIcon sx={{ fontSize: 20 }}>{menu.icon}</ListItemIcon>
          <ListItemText primary={menu.label} />
        </ListItemButton>
      ))}
    </>
  );
}
