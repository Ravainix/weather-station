import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const SideMenuList = () => {
  return (
    <List>
      {['Table', 'Stations'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default SideMenuList;
