const express = require('express');
const app = express();

// __dirname e uma variavel que passa o endereco da sua aplicacao
 app.get("/",function(req, res){
    res.sendFile(__dirname+"/paginas/index.html") // mandar
 });

 app.get("/sobre/:nome/:cargo",function(req, res){
   res.sendFile(__dirname+"/paginas/sobre.html")
 });

 app.get("/blog/:nome/:cargo",function(req, res){
   res.sendFile(__dirname+"/paginas/bla.html")
 });

app.get("/bla/:nome/:cargo",function(req, res){
   res.sendFile(__dirname+"/paginas/bla.html")
});

 app.listen(8080, function(){
    console.log("Servidor Rodando na URL http://localhost:8080");
});
