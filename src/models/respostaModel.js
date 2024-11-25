var database = require("../database/config")

function cadastrar(idPergunta, idusuario, isCorreto) {
    console.log("ACESSEI O USUARIO MODEL \n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t >> verifique suas credenciais de acesso ao banco\n\t\t >> e se o servidor de seu BD está rodando corretamente.\n\n function cadastrarResposta():", idPergunta, idusuario, isCorreto);
    
    // Query para inserir os dados na tabela `resposta`
    var instrucaoSql = `
        INSERT INTO resposta (idPergunta, idusuario, isCorreto) 
        VALUES (${idPergunta}, ${idusuario}, '${isCorreto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

 function listarDesempenho(){
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
GROUP BY
    nome
ORDER BY qtdAcertos DESC;`
return database.executar(instrucaoSql);
 }
module.exports={cadastrar, listarDesempenho}

