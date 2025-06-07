var participarTModel = require("../models/participarTModel");

function carregarDetalhesTorneio(req, res) {
    var ID_TORNEIO = req.params.ID_TORNEIO;

    participarTModel.buscarTorneioPorId(ID_TORNEIO)
        .then(torneio => {
            if (torneio.length == 0) {
                return res.status(404).send("Torneio não encontrado");
            }
            // Busca os jogadores inscritos la do bd
            participarTModel.carregarDetalhesTorneio(ID_TORNEIO)
                .then(jogador => {
                    res.json({
                        torneio: torneio[0],
                        jogador: jogador[0]
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
    var ID_TORNEIO = req.params.ID_TORNEIO;
    var idJogador = req.body.idJogador; 

    if (!idJogador || !ID_TORNEIO) {
        return res.status(400).send("idJogador é obrigatório");
    }

    participarTModel.participarDoTorneio(ID_TORNEIO, idJogador)
        .then(() => {
        res.status(201).json({ mensagem: "Jogador inscrito com sucesso!" });
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage || "Erro no servidor");
        });
}

module.exports = {
    carregarDetalhesTorneio,
   participarDoTorneio
};