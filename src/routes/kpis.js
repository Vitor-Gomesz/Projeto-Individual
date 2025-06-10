var express = require("express");
var router = express.Router();

var kpisController = require("../controllers/kpisController");

// Rota para buscar os KPIs do jogador
router.get("/kpis/:idJogador", kpisController.buscarKPIs);

module.exports = router;