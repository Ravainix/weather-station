import React from 'react';
import { useQuery } from 'react-query';
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

import { Alert, AlertTitle } from '@material-ui/lab';

export type Measure = {
  id: number;
  temperature: number;
  humidity: number;
  pressure: number;
  battery: number;
  CreatedAt: number;
};

const useStyles = makeStyles(() =>
  createStyles({
    h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '-0.05px',
    },
  })
);

const getMeasures = async (): Promise<Measure[]> => fetch('http://localhost:9090/v1/weather').then((res) => res.json());

const MeasureTable = () => {
  const { isSuccess, isError, data } = useQuery<Measure[], Error>('measures', getMeasures);
  const classes = useStyles();

  if (isError) {
    return (
      <Card>
        <CardHeader className={classes.h5} title="Last measures" />
        <Divider />
        <CardContent>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Error occurred during <strong>loading</strong> data!
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader title="Last measures" />
      <Divider />
      <CardContent>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Temperature</TableCell>
                <TableCell align="right">Humidity</TableCell>
                <TableCell align="right">Pressure</TableCell>
                <TableCell align="right">Battery</TableCell>
                <TableCell align="right">Last Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isSuccess &&
                data?.map(({ id, temperature, humidity, pressure, battery, CreatedAt }: Measure) => (
                  <TableRow key={id} hover>
                    <TableCell>{id}</TableCell>
                    <TableCell align="right">{temperature}</TableCell>
                    <TableCell align="right">{humidity}</TableCell>
                    <TableCell align="right">{pressure}</TableCell>
                    <TableCell align="right">{battery}</TableCell>
                    <TableCell align="right">{CreatedAt}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default MeasureTable;
