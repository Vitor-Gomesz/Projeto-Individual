var express = require('express');
var router = express.Router();
var r6Controller = require('../controllers/r6Controller');

router.get('/buscar/:plataforma/:nome', r6Controller.buscarPlayerPorNome);

module.exports = router;