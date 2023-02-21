import {
    Typography,
    TextField,
    Button,
  } from "@mui/material";
  import * as React from "react";
import { useState } from "react";
import { SideMenu } from "../side-menu/SideMenu";
import axios from 'axios'

  export const Form = () => {
   
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
      axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
      const res = await axios.post('http://localhost:5000/client', {...state})
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
        setTimeout(att, 1000)
        return
      }
    }
    return (
      <>
      <SideMenu></SideMenu>
     <div style={{marginTop:"20px", display:"flex",alignItems:"center", 
     flexFlow:"wrap",justifyContent:"space-between",
     width:"60%",marginLeft:"250px",
     padding:"10px",gap:"25px",backgroundColor:"rgba(255,255,255,1)", borderRadius:"10px",
     boxShadow:"0px -5px 15px rgba(255,255,255,0.8)"}}>
        <Typography variant="h5" sx={{color:"black",marginLeft:"250px"}}>Cadastrar novo Usuário</Typography>
        <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center", 
                      flexFlow:"wrap",justifyContent:"space-between",gap:"10px"
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
          />
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
          />
          <br />
          <TextField
            required
            onChange={(e) => setBirthdate(e.target.value)}
            style={{ width: "350px", margin: "5px" }}
            type="date"
            label="Aniversário"
            variant="outlined"
          />
          <br />
          <TextField
            required
            onChange={(e) => setAddress(e.target.value)} 
            style={{ width: "350px", margin: "5px", wordBreak:"break-word"}}
            type="text"
            label="Endereço Completo"
            rows={2}
            multiline={true}
            variant="outlined"
            error={enderecoErro}
            helperText={enderecoErroTexto}
          />
          <br />
          <Button variant="contained" type="submit" color="primary">
            Enviar Dados
          </Button>
        </form>
      </div>
      </>
    );
  }
  