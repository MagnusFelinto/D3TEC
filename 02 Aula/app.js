const express = require('express');
const app = express();
// Instalem o Nodemon

// Tendo uma ideia de paramentros e como eles sao passados seu site
 app.get("/",function(req, res){
    res.send("Bem vindo ao site")
 });
// Podemos usar paramentros via URL
 app.get("/sobre/:nome/:cargo",function(req, res){
    res.send("Bem vindo ao meu sobre")
 });
// Agora vamos realmente ver o que eles sao
 app.get("/blog/:nome/:cargo",function(req, res){
    res.send(req.params)
 });
// Vamos usar o que apreendemos agora
app.get("/bla/:nome/:cargo",function(req, res){
   res.send("<h1>Ola "+req.params.cargo+"</h1><h2>Seja bem vindo de volta "+req.params.nome+"</h2>")
});

 app.listen(8080, function(){
    console.log("Servidor Rodando na URL http://localhost:8080");
});
