var database = require("../database/config");

function buscarTorneioPorId(idTorneio) {
    var instrucaoSql = `
        SELECT * FROM torneios WHERE idTorneios = ${idTorneio};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carregarDetalhesTorneio(idTorneio) {
    var instrucaoSql = `
        SELECT j.idJogadores, j.gamertag 
        FROM jogadores j
        INNER JOIN jogadores_dos_torneios jt ON j.idJogadores = jt.fkJogadores
        WHERE jt.fkTorneios = ${idTorneio};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function participarDoTorneio(idTorneio, idJogador) {
var instrucaoSql = `
    INSERT INTO jogadores_dos_torneios (fkJogadores, fkTorneios)
    SELECT ${idJogador}, 2
    WHERE NOT EXISTS (
        SELECT 1 FROM jogadores_dos_torneios
        WHERE fkJogadores = ${idJogador} AND fkTorneios = 2
    );
`;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTorneioPorId,
    carregarDetalhesTorneio,
    participarDoTorneio
};