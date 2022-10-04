const Sequelize = require("sequelize")
const sequelize = new Sequelize('d3tec_usuarios','root','senha',{
    host: "localhost",
    dialect:"mysql"
})

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING // Tem limite de caracteres
    },
    conteudo:{
        type: Sequelize.TEXT  // ilimitado de caracteres
    }
});
const Usuarios = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    }, 
    idade:{
        type: Sequelize.INTEGER
    }, 
    email:{
        type: Sequelize.STRING
    }
});
/** 
    Usuarios.sync({force:true})
    Postagem.sync({force:true})
*/