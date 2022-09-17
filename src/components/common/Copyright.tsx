import React from 'react';
import { Typography, Link } from '@mui/material';
import { COMPANY_NAME, COMPANY_WEBSITE } from '../../constants/template';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className="pt-8"
    >
      {'Copyright © '}
      <Link color="inherit" href={COMPANY_WEBSITE}>
        {COMPANY_NAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
