const express = require('express');
const fetch = require('node-fetch');
const {v4} = require('uuid');
const clientRouter = express.Router();

clientRouter.get('/clients', async (req, res) => {
   const body = await fetch('https://w4xf0uqrd3.execute-api.us-east-1.amazonaws.com/clients')
    return res.json(await body.json());
})
clientRouter.get('/client/:id', async (req, res) => {
    const {id} = req.params;
    const client = req.body;
    const body = await fetch(`https://w4xf0uqrd3.execute-api.us-east-1.amazonaws.com/client/${id}`, { method: 'get',headers: {'Content-Type': 'application/json'}})
    return res.json(await body.json());
})

clientRouter.post('/client', async (req, res) => {
    const client = req.body;
    client.id= v4();
    const body = await fetch('https://w4xf0uqrd3.execute-api.us-east-1.amazonaws.com/client', { method: 'POST',headers: {'Content-Type': 'application/json'},body:JSON.stringify(client)})
    return res.json({"Cliente cadastrado":(client.id)});
})

clientRouter.put('/client/:id', async (req, res) => {
    const {id} = req.params;
    const client = req.body;
    const body = await fetch(`https://w4xf0uqrd3.execute-api.us-east-1.amazonaws.com/client/${id}`, { method: 'put',body:JSON.stringify(client),headers: {'Content-Type': 'application/json'}})
    return res.json({"Cliente Atualizado":(id)});
})

clientRouter.delete('/client/:id', async (req, res) => {
    const {id} = req.params;
    const client = req.body;
    const  body = await fetch(`https://w4xf0uqrd3.execute-api.us-east-1.amazonaws.com/client/${id}`,{ method: 'delete',body:JSON.stringify(client),headers: {'Content-Type': 'application/json'}})
    return res.json({"Cliente Deletedado":(id)});
})

module.exports = clientRouter;