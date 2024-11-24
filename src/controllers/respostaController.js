var respostaModel = require("../models/respostaModel");


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
    function listarDesempenho(req,res){
        respostaModel.listarDesempenho(req,res).then((resultado )=> {res.status(200).json(resultado)}
    )}

module.exports = {
    cadastrar,
    listarDesempenho
}