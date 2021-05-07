import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import MeasureTable from './MeasuresTable';
import SideMenu from './SideMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const DashboardLayout = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <SideMenu />
        <div className={classes.content}>
          <MeasureTable />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
