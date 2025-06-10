var database = require("../database/config");

function buscarKD(idJogador) {
    var instrucaoSql = `SELECT kd_ratio as kd FROM jogadores WHERE idJogadores = ${idJogador};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarWinRate(idJogador) {
    var instrucaoSql = `SELECT win_rate as win_rate FROM jogadores WHERE idJogadores = ${idJogador};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacao(idJogador) {
    var instrucaoSql = `SELECT pontuacao as pontuacao FROM historico WHERE fkJogadores = ${idJogador};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKD,
    buscarWinRate,
    buscarPontuacao
};