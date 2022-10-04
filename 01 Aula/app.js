const express = require('express');
const app = express();
// Tendo uma ideia do que rota
 app.get("/",function(){
    res.send("Bem vindo ao site")
 });

 app.get("/sobre",function(){
    res.send("Bem vindo ao meu sobre")
 });

 app.get("/blog",function(){
    res.send("Bem vindo ao meu blog")
 });

 app.listen(8080, function(){
    console.log("Servidor Rodando na URL http://localhost:8080");
});
