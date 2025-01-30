var express = require("express");
var router = express.Router();



var respostaController = require("../controllers/respostaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    respostaController.cadastrar(req, res);
})
// ajuste feito no dia 09/01
router.get("/listarDesempenho/:idusuario", function (req,res){
    respostaController.listarDesempenho(req,res)
})
// function para o ranking 29/01
router.put("/cadastrarPontos", function (req, res) {
    respostaController.cadastrarPontos(req, res);
})

module.exports = router;