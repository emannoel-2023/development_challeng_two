import * as React from 'react';
import { Drawer, Box, Typography, IconButton, Avatar, Divider, Button, Switch} from '@mui/material';
import { useState } from 'react';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import Image from '../../../images/remove_background.png'

export const MuiDrawer= () => {
    const [isDrawerOpen, setIsDrawerOpen]= useState(false)
  return (
    <>
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={()=> setIsDrawerOpen(true)}
    >
    <MenuIcon />
    </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}>
          <Box p={2} width='210px' textAlign='center' role='presentation' bgcolor={'#002137'}>
          <Avatar sx={{height:120, width:140, display:'flex', left:30}} src={Image} component="a" href="/home" title="Home"></Avatar>
          </Box>
          <Divider></Divider>
          <Button variant="text" sx={{marginTop:1}} component="a" href="/add_user"><MedicalInformationIcon/>Cadastrar novo usuário</Button>
          <Divider></Divider>
          <Button variant="text" sx={{marginTop:1}} component="a" href="/view_users"><EditIcon></EditIcon> Editar Cadastro</Button>
          <Divider></Divider>
      </Drawer>
    </>
  )
}