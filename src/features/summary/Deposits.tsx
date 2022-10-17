import React from 'react';
import { Link, Typography } from '@mui/material';
import Title from '../../components/Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" className="flex-1">
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="/" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </>
  );
}
