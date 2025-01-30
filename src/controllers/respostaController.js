var respostaModel = require("../models/respostaModel");
// recebe os dados da routes e interage com o models para retornar uma mensagem para routes

function cadastrar(req,res){
    idusuario = req.body.idusuario;
    idpergunta = req.body.idpergunta;
    isCorreto = req.body.isCorreta;

    respostaModel.cadastrar(idpergunta, idusuario, isCorreto).then(function (resultado){
        res.json(resultado)
    })
    .catch(function(erro){
        console.log(erro);
        console.log("\n Erro ao cadastrar pergunta! Erro", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
    });
}

//ajuste do idusuario feito no dia 09/01
    function listarDesempenho(req,res){
        idusuario = req.params.idusuario
        respostaModel.listarDesempenho(idusuario).then((resultado )=> {res.status(200).json(resultado)}
    )}
// function para o ranking 29/01
    function cadastrarPontos(req,res){
        idusuario = req.body.idusuario
        pontos = req.body.pontos
        respostaModel.cadastrarPontos(idusuario, pontos).then((resultado )=> {res.status(200).json(resultado)}
    )
    .catch(function(erro){
        console.log(erro);
        console.log("\n Erro ao cadastrar pontos! Erro", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
    });}

module.exports = {
    cadastrar,
    listarDesempenho,
    cadastrarPontos
    
}