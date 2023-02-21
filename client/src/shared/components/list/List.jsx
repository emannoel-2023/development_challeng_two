import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { SideMenu } from '../side-menu/SideMenu';
import { useState } from 'react';
import axios from 'axios';
import {Modal} from '../modal/modal'

export const DataTable= () => {
  const [dados, setDados]= useState([])

  React.useEffect(() =>{
    axios.get('http://localhost:5000/clients').then(({data}) =>{
      setDados(data.Items)
    });
  },[]);
  React.useEffect(() =>{
  },[dados]);

  const delet = (id) =>{
    axios.delete(`http://localhost:5000/client/${id}`)
    setTimeout(window.location.reload(), 5000)
  }
  return (
    <>
    <SideMenu></SideMenu>
    <TableContainer component={Paper} sx={{marginTop:"30px", width:990,backgroundColor:"rgba(255,255,255,1)", borderRadius:"10px",
    boxShadow:"0px -5px 15px rgba(255,255,255,0.8)", marginLeft:"150px"}}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="inherit">Nome</TableCell>
            <TableCell align="inherit">Aniversário</TableCell>
            <TableCell align="inherit">Email</TableCell>
            <TableCell align="inherit">Edereço</TableCell>
            <TableCell align="inherit">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dados?.map((dado) => (
            <TableRow
              key={dado.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{width:200,wordBreak:'break-word'}} >
                {dado.name}
              </TableCell>
              <TableCell align="inherit" sx={{width:79,wordBreak:'break-word'}}>{dado.birthdate}</TableCell>
              <TableCell align="inherit" sx={{width:220,wordBreak:'break-word'}}>{dado.email}</TableCell>
              <TableCell align="inherit"sx={{width:200, wordBreak:'break-word'}}>{dado.address}</TableCell>
              <TableCell align="inherit" sx={{width:80,wordBreak:'break-word'}}>{dado.actions}
              <Modal id={dado.id}></Modal>
              <IconButton sx={{color:'#0094e0'}} type="submit" onClick={()=>{delet(dado.id)}}>
                <DeleteIcon></DeleteIcon>
                </IconButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


