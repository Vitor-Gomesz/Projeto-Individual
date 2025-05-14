var empresaModel = require("../models/empresaModel");

function buscarPorEmail(req, res) {
  var email = req.query.email;

  empresaModel.buscarPorEmail(email).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(idJogadores).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var email = req.body.email;
  var gamertag = req.body.gamertag;

  empresaModel.buscarPorEmail(email).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o email ${email} já existe` });
    } else {
      empresaModel.cadastrar(gamertag, email).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorEmail,
  buscarPorId,
  cadastrar,
  listar,
};
