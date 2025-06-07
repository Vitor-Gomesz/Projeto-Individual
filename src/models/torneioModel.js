const database = require("../database/config");

function listarTorneios() {
  const instrucao = `
  SELECT idTorneios, nome, descricao, dtInicio, dtFim, statusTorneio, qtdParticipantes,plataformas, formato, resultadoPor, tipoInscricao FROM torneios;
  `;
  return database.executar(instrucao);
}

function participarTorneio(idJogador, idTorneio, nomeTime) {
  const instrucao = `
    INSERT INTO jogadores_dos_torneios (fkJogadores, fkTorneios, nomeTime)
    VALUES (${idJogador}, ${idTorneio}, '${nomeTime}');
  `;
  return database.executar(instrucao);
}

module.exports = {
  listarTorneios,
  participarTorneio
}