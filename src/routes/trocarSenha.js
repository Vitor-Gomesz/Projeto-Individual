var express = require("express");
var router = express.Router();

var trocarSenhaController = require("../controllers/trocarSenhaController");

router.put("/", trocarSenhaController.trocarSenha);

module.exports = router;