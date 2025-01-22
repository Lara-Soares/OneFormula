var database = require("../database/config")


 function ranking(idusuario){
    var instrucaoSql = `select fk_usuario,notaGeral from pergunta order by notaGeral;`
return database.executar(instrucaoSql);
 }
module.exports={ranking}

