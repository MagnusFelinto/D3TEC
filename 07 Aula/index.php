<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAIO 123</title>
<script>
 console.log("AQUI A MENSAGEM")

</script>

</head>
<style>
    .red{
        color:red;
    }
    .azul{
        color:blue;
    }
    #esseCara{
        font-size: 30pt;
    }
    body{
        background: url('http://s2.glbimg.com/lTUhRSG_HLiZm_hnV0PtPVRY1dw=/e.glbimg.com/og/ed/f/original/2016/04/05/2c.jpg');
    }
    .caixa{
        margin-top: 20%;
        margin-left: 30%;
        margin-right: 30%;
        padding: 10%;
        background-color: blue;
        border-radius: 8px;
    }
</style>


<body>
    <div class="caixa" align="center">
        <h1> Digite suas credenciais</h1>
    <form method="post" action="cadastra.php">     
        <input type="text" name="nome" id="" placeholder="Digite seu nome">
        <br>
        <input type="email" name="email" id="" placeholder="Digite seu e-mail">
        <br>
        <input type="password" name="senha" id="" placeholder="Digite sua senha">
        <br>
        <input type="submit" value="Entrar">
    </form> 
    </div>
</body>
</html>