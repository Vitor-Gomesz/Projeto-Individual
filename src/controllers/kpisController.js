var dashboardModel = require("../models/kpisModel");

function buscarKPIs(req, res) {
    var idJogador = req.params.idJogador;

    dashboardModel.buscarKD(idJogador).then(resultadoKD => {
        dashboardModel.buscarWinRate(idJogador).then(resultadoWR => {
            dashboardModel.buscarPontuacao(idJogador).then(resultadoPontuacao => {

                if (resultadoKD[0].kd != undefined && resultadoWR[0].win_rate != undefined &&  resultadoPontuacao[0].pontuacao != undefined) {
                    res.json({
                        kd: resultadoKD[0].kd,
                        win_rate: resultadoWR[0].win_rate,
                        pontuacao: resultadoPontuacao[0].pontuacao
                    });
                } else {
                    res.status(204);
                }
            });
        });
    });
}

module.exports = {
    buscarKPIs
};