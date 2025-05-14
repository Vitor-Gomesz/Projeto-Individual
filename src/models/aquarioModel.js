var database = require("../database/config");

function buscarAquariosPorEmpresa(idJogadores) {

  var instrucaoSql = `SELECT * FROM jogadores a WHERE idJogadores = ${idJogadores}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idJogadores, gamertag) {
  
  var instrucaoSql = `INSERT INTO (descricao, gamertag) jogadores VALUES (${gamertag}, ${idJogadores})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
