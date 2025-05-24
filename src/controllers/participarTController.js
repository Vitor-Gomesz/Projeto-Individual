var participarTModel = require("../models/participarTModel");

function carregarDetalhesTorneio(req, res) {
    var idTorneio = req.params.idTorneio;

    participarTModel.buscarTorneioPorId(idTorneio)
        .then(torneio => {
            if (torneio.length == 0) {
                return res.status(404).send("Torneio não encontrado");
            }
            // Busca os jogadores inscritos la do bd
            participarTModel.carregarDetalhesTorneio(idTorneio)
                .then(jogadores => {
                    res.json({
                        torneio: torneio[0],
                        jogadores: jogadores
                    });
                })
                .catch(erro => {
                    console.error(erro);
                    res.status(500).json(erro.sqlMessage || "Erro no servidor");
                });
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage || "Erro no servidor");
        });
}

function participarDoTorneio(req, res) {
    var idTorneio = req.body.idTorneio;
    var idJogador = req.body.idJogador; 

    if (!idJogador || !idTorneio) {
        return res.status(400).send("idJogador é obrigatório");
    }

    participarTModel.participarDoTorneio(idTorneio, idJogador)
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage || "Erro no servidor");
        });
}

module.exports = {
    carregarDetalhesTorneio,
   participarDoTorneio
};