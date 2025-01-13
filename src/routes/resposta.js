var express = require("express");
var router = express.Router();



var respostaController = require("../controllers/respostaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    respostaController.cadastrar(req, res);
})

router.get("/listarDesempenho", function (req,res){
    respostaController.listarDesempenho(req,res)
})


module.exports = router;