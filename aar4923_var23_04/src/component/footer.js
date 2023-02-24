
import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import "./../style/fooder.css";


const footerItem = [{name: 'foo', link: 'https://www.ntnu.no'}, {name: 'foo2', link: 'https://www.ntnu.no'}];

function Footer() {
    return (
      <footer>
          <Toolbar>
              <Box sx={{
                  display: { xs: 'flex', sm: 'flex' },
              }}>
              {footerItem.map((item) => (
                  <ListItem key={item} disablePadding>
                      <ListItemButton sx={{textAlign: 'center'}} href={item.link}>
                          <ListItemText primary={item.name} />
                      </ListItemButton>
                  </ListItem>
              ))}
              </Box>
          </Toolbar>
      </footer>
    );
}
export default Footer;
