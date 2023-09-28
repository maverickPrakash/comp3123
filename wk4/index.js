var express = require("express");
const app = express();
const SERVER_PORT = 8087

app.get("/hello",(req,res)=>{
    res.send("<h1>Hello Welcome to express</h1>")
})


app.get("/user",(req,res)=>{
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    const user = {
        firstname:"Prakash",
        lastname:"Kumar"

    }
    res.send(user)
})

app.post("/user/:firstname/:lastname",(req,res)=>{
    res.send(req.params)
})


app.listen(SERVER_PORT)
