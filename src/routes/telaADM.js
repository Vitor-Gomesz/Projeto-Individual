var express = require("express");
var router = express.Router();

var telaADMController = require("../controllers/telaADMController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/enviarEstatisticas", function (req, res) {
    telaADMController.enviarEstatisticas(req, res);
})

module.exports = router;