var express = require("express");
var router = express.Router();

var participarTController = require("../controllers/participarTController");

// GET /torneios/:id — pega detalhes do torneio + jogadores inscritos
router.get("/:ID_TORNEIO", function (req, res) {
  participarTController.carregarDetalhesTorneio(req, res);
});

// POST /torneios/:id/participar — inscreve jogador no torneio
router.post("/participar/:ID_TORNEIO", function (req, res) {
    participarTController.participarDoTorneio(req, res);
});

module.exports = router;