const bodyparser = require("body-parser");
const path = require("path");
const express = require('express');
const app = express();

const port = 4000;
 
app.use(bodyparser.json());

let users =[
    {id: 1,name: 'oviyan', email: 'oviya17@gmail.com'},
    {id: 2,name: 'bhagavath', email: 'bhagvid0225@gmail.com'},
    {id: 3,name: 'toji', email: 'tojifusi001@gmail.com'},
    {id: 4,name: 'oviya', email: 'oviya7@gmail.com'},
    {id: 5,name: 'thor', email: 'asaguardian17@gmail.com'},
    {id: 6,name: 'chottabheem', email: 'oviyanpur27@gmail.com'},
];

app.get('/users',(req,res)=> {
    res.json(users);
});

app.get('/users/:id',(req,res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);


if(user){
    res.json(user);
}else{
    res.status(404).json({message : "User not Found"});
}
});

app.post('/users',(req,res) => {
    const newUser = {
        id : users.length+1,
        name : req.body.name,
        email : req.body.email

    };
    users.push(newUser);
    res.status(201).json(newUser);
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:4000');
});