var database = require("../database/config");

function buscarUltimasMedidas(idJogador, limite_linhas) {

    var instrucaoSql = `SELECT 
        win_rate as winRate, 
        kd_ratio as K/D,
                    FROM jogadores
                    WHERE idJogadores = ${idJogador}
                    ORDER BY idJogadores DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idJogador) {

    var instrucaoSql = `SELECT 
        win_rate as temperatura, 
        kd_ratio as umidade,
                        FROM jogadores WHERE idJogadores = ${idJogador} 
                    ORDER BY idJogadores DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
