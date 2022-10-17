import React from 'react';
import { Link, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Title from '../../components/Title';

const TotalOrders = [
  {
    id: 0,
    date: '16 Mar, 2019',
    name: 'Elvis Presley',
    shipTo: 'Tupelo, MS',
    paymentMethod: 'VISA ⠀•••• 3719',
    amount: 312.44
  },
  {
    id: 1,
    date: '16 Mar, 2019',
    name: 'Paul McCartney',
    shipTo: 'London, UK',
    paymentMethod: 'VISA ⠀•••• 2574',
    amount: 866.99
  },
  {
    id: 2,
    date: '16 Mar, 2019',
    name: 'Tom Scholz',
    shipTo: 'Boston, MA',
    paymentMethod: 'MC ⠀•••• 1253',
    amount: 100.81
  },
  {
    id: 3,
    date: '16 Mar, 2019',
    name: 'Michael Jackson',
    shipTo: 'Gary, IN',
    paymentMethod: 'AMEX ⠀•••• 2000',
    amount: 654.39
  },
  {
    id: 4,
    date: '15 Mar, 2019',
    name: 'Bruce Springsteen',
    shipTo: 'Long Branch, NJ',
    paymentMethod: 'VISA ⠀•••• 5919',
    amount: 212.79
  }
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TotalOrders.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link className="mt-6" color="primary" href="/" onClick={preventDefault}>
        See more orders
      </Link>
    </>
  );
}
