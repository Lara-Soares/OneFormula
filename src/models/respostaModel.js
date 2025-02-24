var database = require("../database/config")

function cadastrar(idPergunta, idusuario, isCorreto) {
    console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t >> verifique suas credenciais de acesso ao banco\n\t\t >> e se o servidor de seu BD está rodando corretamente.\n\n function cadastrarResposta():", idPergunta, idusuario, isCorreto);

    // Query para inserir os dados na tabela resposta
    var instrucaoSql = 
        `INSERT INTO resposta (idPergunta, idusuario, isCorreto) 
        VALUES (${idPergunta}, ${idusuario}, '${isCorreto}')`;
    ;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// alteração feita no dia 09/01
 function listarDesempenho(idusuario){
    var instrucaoSql = `SELECT
    nome,
    (
        SUM(
            CASE
                WHEN isCorreto = '1' THEN 1
                ELSE 0
            END
        ) 
    )  AS qtdAcertos, 
    COUNT(idResposta) - SUM(
            CASE
                WHEN isCorreto = '1' THEN 1
                ELSE 0
            END
        )  as qtdErros
FROM resposta
    JOIN usuario ON resposta.idusuario = usuario.idusuario
    where usuario.idusuario = ${idusuario} 
GROUP BY
    nome
ORDER BY qtdAcertos DESC`;
return database.executar(instrucaoSql);
 }

// function para o ranking 29/01
 function cadastrarPontos(idusuario, pontos){
    var instrucaoSql = 
    `UPDATE usuario 
    SET pontos = ${pontos}
    where idusuario = ${idusuario}`;
;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

// 30/01
function listarMaxMin() {
    var instrucaoSql = `
        SELECT
            MAX(pontos) AS maxPontos,
            MIN(pontos) AS minPontos
        FROM usuario;
    `;
    return database.executar(instrucaoSql);
}
module.exports={cadastrar, listarDesempenho, cadastrarPontos, listarMaxMin}