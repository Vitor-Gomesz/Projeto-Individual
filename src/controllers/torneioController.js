const torneioModel = require("../models/torneioModel");

function listarTorneios(req, res) {
  torneioModel.listarTorneios()
    .then(resultado => res.status(200).json(resultado))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: "Erro ao buscar torneios." });
    });
}

function participarTorneio(req, res) {
  const { idJogador, idTorneio } = req.body;

  torneioModel.participarTorneio(idJogador, idTorneio, )
    .then(() => res.status(200).json({ mensagem: "Participação registrada!" }))
    .catch(erro => {
      console.error(erro);
      res.status(500).json({ erro: "Erro ao registrar participação." });
    });
}

module.exports = {
  listarTorneios,
  participarTorneio
};
