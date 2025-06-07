var database = require("../database/config");

function buscarTorneioPorId(ID_TORNEIO) {
    var instrucaoSql = `
        SELECT * FROM torneios WHERE idTorneios = ${ID_TORNEIO};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function carregarDetalhesTorneio(ID_TORNEIO) {
    var instrucaoSql = `
        select nome, descricao, dtInicio from torneios
        WHERE idTorneios = ${ID_TORNEIO};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function participarDoTorneio(ID_TORNEIO, idJogador) {
var instrucaoSql = `
    INSERT INTO jogadores_dos_torneios (fkJogadores, fkTorneios)
    SELECT ${idJogador}, ${ID_TORNEIO}
    WHERE NOT EXISTS (
        SELECT 1 FROM jogadores_dos_torneios
        WHERE fkJogadores = ${idJogador} AND fkTorneios = ${ID_TORNEIO}
    );
`;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTorneioPorId,
    carregarDetalhesTorneio,
    participarDoTorneio
};