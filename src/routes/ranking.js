var express = require("express");
var router = express.Router();



var rankingController = require("../controllers/rankingController");


router.post("/listarDesempenho/:idusuario", function (req,res){
    rankingController.ranking(req,res)
})


module.exports = router;