import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  createStyles,
  makeStyles,
} from '@material-ui/core';

import { Measure } from './MeasuresTable';

const Chart = (measures: Measure[]) => {
  return (
    <>
      <Card>
        <CardHeader title="Chart" />
        <Divider />
        <CardContent></CardContent>
      </Card>
    </>
  );
};

export default Chart;
