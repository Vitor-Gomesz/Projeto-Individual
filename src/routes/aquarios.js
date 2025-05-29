var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get("/:idJogadores", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res, idJogador) {
  aquarioController.cadastrar(req, res, idJogador);
})

module.exports = router;