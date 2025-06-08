const database = require("../database/config");

// Buscar usuário pelo nome e email
function buscarUsuarioPorNomeEmail(gamertag, email) {
  const instrucao = `
    SELECT * FROM jogadores 
    WHERE gamertag = '${gamertag}' AND email = '${email}';
  `;
  return database.executar(instrucao);
}

// Atualizar senha e, se tiver, o email
function atualizarSenhaEmail(idJogador, senhaN, emailN) {
  let instrucao;

  if (emailN) {
    instrucao = `
      UPDATE jogadores 
      SET senha = '${senhaN}', email = '${emailN}' 
      WHERE idJogadores = ${idJogador};
    `;
  } else {
    instrucao = `
      UPDATE jogadores 
      SET senha = '${senhaN}' 
      WHERE idJogadores = ${idJogador};
    `;
  }

  return database.executar(instrucao);
}

module.exports = {
  buscarUsuarioPorNomeEmail,
  atualizarSenhaEmail
};