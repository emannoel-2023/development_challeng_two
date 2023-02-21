import * as React from 'react';
import Paper from  '@mui/material/Paper'
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
  } from "@mui/material";
  import axios from 'axios';

export const Modal = ({id}) =>{
   const [open, setOpen]= useState(false);
   const handleOpen = () =>{
    setOpen(!open)
   }
   const handleClose = () => {
    setOpen(false);
    setTimeout(window.location.reload(), 100)
  };
   const [dados, setDados]= useState([])
    React.useEffect(() =>{
      axios.get(`http://localhost:5000/client/${id}`).then(({data}) =>{
        setDados(data.Item)
      });
    },[]);
    React.useEffect(() =>{
      setName(dados.name)
      setEmail(dados.email)
      setAddress(dados.address)
      setBirthdate(dados.birthdate)
    },[dados]);
   
   const [nome, setName]= useState('')
    const [nomeErro, setNameErro]= useState(false)
    const [nomeErroTexto, setNameErroTexto]= useState('')
    
    const [aniversario, setBirthdate]= useState('')

    const [email, setEmail]= useState('')
    const [emailErro, setEmailErro]= useState(false)
    const [emailErroTexto, setEmailErroTexto]= useState('')

    const [endereco, setAddress]= useState('')
    const [enderecoErro, setAddressErro]= useState(false)
    const [enderecoErroTexto, setAddressErroTexto]= useState('')

    const state ={
      name:nome,
      email:email,
      birthdate:aniversario,
      address:endereco
    }
    const att = async() =>{
     try{
      axios.defaults.headers.put['Content-Type'] ='application/json;charset=utf-8';
      const res = await axios.put(`http://localhost:5000/client/${id}`, {...state})
      window.location.reload()
      return res.data;
     }catch(error){
      console.log('erro: ', error);
     }
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      if(nome.length < 8){
        setNameErro(true)
        setNameErroTexto("Por favor digite seu nome completo")
        return
      }else{
        setNameErro(false)
        setNameErroTexto('')
      }

      if(!email.includes(".com")){
        setEmailErro(true)
        setEmailErroTexto("Por favor digite um email valido")
        return
      }else{
        setEmailErro(false)
        setEmailErroTexto('')
      }

      if(endereco.length < 40){
        setAddressErro(true)
        setAddressErroTexto("Por favor digite seu endereço completo")
        return
      }else{
        setAddressErro(false)
        setAddressErroTexto('')
      }
      if(nome.length > 8 && email.includes(".com") && endereco.length > 40 && aniversario.length > 0){
        setTimeout(att, 100)
        return
      }
    }

    return (
        <>
         <IconButton  sx={{color:'#0094e0'}} onClick={handleOpen}>
                <EditIcon></EditIcon></IconButton>
        <div style={{display:open? "flex":"none", position:'absolute', width:'60%', height:'100vh', justifyContent:'center',alignItems:'center',left:200,top:0}}>
            <Paper>
            <div style={{display:"flex",alignItems:"center", 
     flexFlow:"wrap",justifyContent:"space-between",
    backgroundColor:"rgba(255,255,255,1)", borderRadius:"10px",
     border:"1px solid black"}}>
        <Typography variant="h5" sx={{color:"black",marginLeft:"250px"}}>Atualizar dados</Typography>
        <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center", 
                      flexFlow:"wrap",justifyContent:"space-evenly"
                      }} autoComplete="off">
          <TextField
            required
            error={nomeErro}
            helperText={nomeErroTexto}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "350px", margin: "5px"}}
            type="text"
            label="Nome completo"
            variant="outlined"
            value = {nome}
            
          ></TextField>
          <br />
          <TextField
          required
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "350px", margin: "5px" }}
            type="email"
            label="Email"
            variant="outlined"
            error={emailErro}
            helperText={emailErroTexto}
            value = {email}
          />
          <br />
          <TextField
            required
            onChange={(e) => setBirthdate(e.target.value)}
            style={{ width: "350px", margin: "5px" }}
            type="date"
            label="Aniversário"
            variant="outlined"
            value = {aniversario}
          />
          <br />
          <TextField
            required
            onChange={(e) => setAddress(e.target.value)} 
            style={{ width: "350px", margin: "5px", wordBreak:"break-word"}}
            type="text"
            label="Endereço Completo"
            multiline={true}
            variant="outlined"
            error={enderecoErro}
            helperText={enderecoErroTexto}
            value = {endereco}
          />
          <br />
          <div style={{display:"flex", gap:"10px"}}>
          <Button variant="contained" type="submit" color="primary">
            Enviar Dados
          </Button>
          <Button variant="contained" type="button" color="primary" onClick={handleClose}>
            Cancelar
          </Button>
          </div>
        </form>
      </div>
            </Paper>
        </div>
        </>
    )
}