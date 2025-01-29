var database = require("../database/config");

function ranking() {
    const instrucaoSql = `SELECT idusuario, nome, pontos FROM usuario ORDER BY pontos DESC;`;
    return database.executar(instrucaoSql);
}

module.exports={ranking}