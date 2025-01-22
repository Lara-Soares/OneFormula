var rankingModel = require("../models/rankingModel");
// recebe os dados da routes e interage com o models para retornar uma mensagem para routes

    function ranking(req,res){
        idusuario = req.params.idusuario
        rankingModel.ranking(idusuario).then((resultado )=> {res.status(200).json(resultado)}
    )}

module.exports = {
    ranking
}