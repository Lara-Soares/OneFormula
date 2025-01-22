var respostaModel = require("../models/respostaModel");
// recebe os dados da routes e interage com o models para retornar uma mensagem para routes

function cadastrar(req,res){
    idusuario = req.body.idusuario;
    idpergunta = req.body.idpergunta;
    isCorreto = req.body.isCorreta;
    //22/01
    notaGeral = req.body.certas;
    respostaModel.cadastrar(idpergunta, idusuario, isCorreto,notaGeral).then(function (resultado){
        res.json(resultado)
    })
    .catch(function(erro){
        console.log(erro);
        console.log("\n Erro ao cadastrar pergunta! Erro", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
    });
}

//ajuste feito no dia 09/01
    function listarDesempenho(req,res){
        idusuario = req.params.idusuario
        respostaModel.listarDesempenho(idusuario).then((resultado )=> {res.status(200).json(resultado)}
    )}

module.exports = {
    cadastrar,
    listarDesempenho
}