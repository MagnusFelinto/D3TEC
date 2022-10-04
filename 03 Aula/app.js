const express = require('express');
const app = express();

// __dirname e uma variavel que passa o endereco da sua aplicacao
 app.get("/",function(req, res){
    res.sendFile(__dirname+"/paginas/index.html") // mandar
 });

 app.get("/sobre/:nome/:cargo",function(req, res){
    res.send("Bem vindo ao meu sobre")
 });

 app.get("/blog/:nome/:cargo",function(req, res){
    res.send(req.params)
 });

app.get("/bla/:nome/:cargo",function(req, res){
   res.send("<h1>Ola "+req.params.cargo+"</h1><h2>Seja bem vindo de volta "+req.params.nome+"</h2>")
});

 app.listen(8080, function(){
    console.log("Servidor Rodando na URL http://localhost:8080");
});
