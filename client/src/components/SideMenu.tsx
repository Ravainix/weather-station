import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { Drawer, Hidden } from '@material-ui/core';
import SideMenuList from './SideMenuList';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const SideMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className={classes.drawer}>
      <Hidden smUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          <SideMenuList />
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <SideMenuList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideMenu;
