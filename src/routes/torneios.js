const express = require("express");
const router = express.Router();
const torneioController = require("../controllers/torneioController");

router.get("/listar", function (req, res){
    torneioController.listarTorneios(req, res);
});
router.post("/participar", torneioController.participarTorneio);


module.exports = router;