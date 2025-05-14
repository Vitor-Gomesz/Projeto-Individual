var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var idJogadores = req.params.idJogadores;

  aquarioModel.buscarAquariosPorEmpresa(idJogadores).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var gamertag = req.body.gamertag;
  var idJogadores = req.body.idJogadores;

  if (gamertag == undefined) {
    res.status(400).send("gamertag está undefined!");
  } else if (idJogadores == undefined) {
    res.status(400).send("idJogadores está undefined!");
  } else {


    aquarioModel.cadastrar(gamertag, idJogadores)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}