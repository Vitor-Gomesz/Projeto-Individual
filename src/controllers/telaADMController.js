var telaADModel = require("../models/telaADModel");

function enviarEstatisticas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var gamertag = req.body.nomeServer;
    var winrate = req.body.winrateServer;
    var kd = req.body.kdServer;
    var pontuacaoT = req.body.pontuacaoTServer


    // Faça as validações dos valores
    if (gamertag == undefined) {
        res.status(400).send("Seu gamertag está undefined!");
    } else if (winrate == undefined) {
        res.status(400).send("Seu winrate está undefined!");
    } else if (kd == undefined) {
        res.status(400).send("Sua kd está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo telaADModel.js
        telaADModel.enviarEstatisticas(gamertag, winrate, kd, pontuacaoT)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    enviarEstatisticas
}