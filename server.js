const express = require('express');

const server = express();
server.use(express.json());

function find(){
    const users = [
        {id: 1, username: 'Kenny', password: '123'},
        {id: 2, username: 'Corey', password: '123'},
        {id: 3, username: 'Kenji', password: '123'}
    ]
    return users
}

server.get('/api/users', async (req,res) => {
    const users = await find();
    res.json(users);
})

server.post('/api/register', async (req , res) => {
    const users = await find();
    const length = Object.keys(users).length;
    users.push({id: length + 1, username: `${req.body.username}`, password: `${req.body.password}`});
    res.json(users);
})

server.post('/api/login', (req, res) => {
    if(req.body.username && req.body.password){
        res.json({message: `Welcome back ${req.body.username}!`});
    }else{
        res.json({message: 'error'});
    }
})

module.exports = server;