var database = require("../database/config");

function ranking() {
    const instrucaoSql = `SELECT fk_usuario, notaGeral FROM pergunta ORDER BY notaGeral DESC;`;
    return database.executar(instrucaoSql);
}

module.exports = { ranking };