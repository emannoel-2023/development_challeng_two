import * as React from 'react';
import Box from '@mui/material/Box';
import Image from '../../../images/macbook-ris-1366-c94b217308e170f79964f25eef4deed6.webp'
import { SideMenu } from '../side-menu/SideMenu';
import { Button, Icon, IconButton, Typography } from '@mui/material';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Home = () => {
  return (
    <>
    <SideMenu></SideMenu>
    <Box sx={{marginTop:0,width:650, display:"flex",alignItems:"center", 
     flexFlow:"wrap",justifyContent:"center",flexDirection:'column', marginLeft:40}}>
    <Typography variant="h3" sx={{ color:'white', textShadow:'1px 1px 0px black'}}>Seus exames </Typography>
    <Typography variant="h3" sx={{color:'white',textShadow:'1px 1px 0px black'}}>na <span style={{color:'#0094e0', textShadow:'1px 0px 0px #FFF'}}>nuvem</span></Typography>
      <img src={Image} style={{width:650, marginTop:10}}></img>
      <Box>
      <Button  type='button' component={'a'} href={'https://medcloud.link/'} title={'https://medcloud.link/'}><OpenInBrowserIcon sx={{ color:'white'}}></OpenInBrowserIcon></Button>
      <Button  type='button' component={'a'} href={'https://www.instagram.com/medcloudbr/'} title={'https://www.instagram.com/medcloudbr/'}><InstagramIcon sx={{ color:'white'}}></InstagramIcon></Button>
      <Button  type='button' component={'a'} href={'https://www.linkedin.com/company/medcloud/?originalSubdomain=br'} title={'https://www.linkedin.com/company/medcloud/?originalSubdomain=br'}><LinkedInIcon sx={{ color:'white'}}></LinkedInIcon></Button>
      </Box>
    </Box>
    </>
  );
};