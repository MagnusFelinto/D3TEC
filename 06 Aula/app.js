const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize  = require("sequelize");

// Config
   // Template Engine
   app.engine('handlebars', handlebars({defaultLayout: 'main'}))
   app.set('view engine',  'handlebars')
// Conexao com DataBase
const sequelize = new Sequelize('d3tec_usuarios','root','senha',{
   host: "localhost",
   dialect:"mysql"
})

// usando o handlebars
app.get("/cad",function(req, res){
   res.render('form') // mandar
});
/*
 // Codigo antigo abaixo
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
*/
 app.listen(8080, function(){
    console.log("Servidor Rodando na URL http://localhost:8080");
});
