var express = require("express");
var router = express.Router();

var criarTController = require("../controllers/criarTController");
const { criarT } = require("../models/criarTModel");

//Recebendo os dados do html e direcionando para a função cadastrar de criarTController.js
router.post("/criarT", function (req, res) {
    criarTController.criarT(req, res);
})

// router.post("/autenticar", function (req, res) {
//     usuarioController.autenticar(req, res);
// });

module.exports = router;