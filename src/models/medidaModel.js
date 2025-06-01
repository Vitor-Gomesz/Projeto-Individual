var database = require("../database/config");

function buscarUltimasMedidas(idJogador, limite_linhas) {

    var instrucaoSql = `SELECT 
        win_rate as winRate, 
        kd_ratio as KD,
        dt_registro as DATA_REGISTRO
                    FROM historico
                    WHERE fkJogadores = 20
                    ORDER BY fkJogadores DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idJogador) {

    var instrucaoSql = `SELECT 
        win_rate as winRate, 
        kd_ratio as KD,
        dt_registro
                        FROM historico WHERE fkJogadores = 20
                    ORDER BY fkJogadores DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
