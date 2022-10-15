import React from 'react';
import { Grid, Paper } from '@mui/material';

import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

function Home() {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className="flex flex-col p-4 h-60">
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits  */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className="flex flex-col p-4 h-60">
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className="flex flex-col p-4">
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
