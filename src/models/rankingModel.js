var database = require("../database/config")

// 22/01
 function ranking(idusuario){
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
ORDER BY qtdAcertos DESC;`
return database.executar(instrucaoSql);
 }
module.exports={ranking}

