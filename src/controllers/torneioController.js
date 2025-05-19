var database = require("../database/config");

function participarTorneio(req, res) {
  var { idJogador, idTorneio, nomeTime } = req.body;

  var instrucao = `
    INSERT INTO jogadores_dos_torneios (fkJogadores, fkTorneios, nomeTime)
    VALUES (${idJogador}, ${idTorneio}, '${nomeTime}');
  `;

  database.executar(instrucao)
    .then(() => res.status(200).json({ mensagem: "Participação registrada!" }))
    .catch(erro => {
      console.log(erro);
      res.status(500).json({ erro: "Erro ao registrar participação." });
    });
}

function listarTorneios(req, res) {
  var instrucao = `SELECT * FROM torneios`;

  database.executar(instrucao)
    .then(resultado => res.status(200).json(resultado))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: "Erro ao buscar torneios." });
    });
}

module.exports = {
  participarTorneio,
  listarTorneios
};
