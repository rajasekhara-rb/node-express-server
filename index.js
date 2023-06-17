const express = require('express');

const app = express();
const port = 9898;

app.get('/', (req, res) => {
    res.send("Welcome to Express Js Server")
})

app.route('/users').get((req,res)=>{
    res.send("users listed here");
})

app.get('/posts', (req,res)=>{
    res.send("posts are here")
})

app.post('/', (req,res)=>{
    console.log(req.body);
    res.send({
        status: 200,
        message: "Data sent successfully",
    })
})

app.listen(port, () => {
    console.log("Server Started at " + port);
})