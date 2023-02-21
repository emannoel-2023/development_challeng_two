import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {MuiDrawer} from '../drawer/Index'
import { Avatar } from '@mui/material';
import Image from '../../../images/remove_background.png'

export const SideMenu = () => {
  const listStyle3 = {
    background: '#002137',
    margin:0,
    height:0
  }
  return (
    <>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" >
        <Toolbar style={listStyle3}>
            <MuiDrawer/>
            <Avatar sx={{height:150, width:150, right:15}} src={Image} component="a" href="/home" title="Home"></Avatar>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};