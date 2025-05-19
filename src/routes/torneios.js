const express = require("express");
const router = express.Router();

const torneioController = require("../controllers/torneioController");

router.post("/participar", torneioController.participarTorneio);
router.get("/listar", torneioController.listarTorneios);

module.exports = router;