var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM jogadores WHERE id = '${idJogadores}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idJogadores, gamertag, email FROM jogadores`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(email) {
  var instrucaoSql = `SELECT * FROM jogadores WHERE email = '${email}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(gamertag, email) {
  var instrucaoSql = `INSERT INTO jogadores (gamertag, email) VALUES ('${gamertag}', '${email}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
