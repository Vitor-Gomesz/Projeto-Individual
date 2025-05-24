const express = require('express');
const router = express.Router();
const r6Controller = require('../controllers/r6Controller');

router.get('/buscar/:plataforma/:nome', r6Controller.buscarPlayerPorNome);

module.exports = router;