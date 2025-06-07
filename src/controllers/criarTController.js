var criarTModel = require("../models/criarTModel");
// var aquarioModel = require("../models/aquarioModel");

// function autenticar(req, res) {
//     var email = req.body.emailServer;
//     var descricaoVar = req.body.senhaServer;

//     if (!email) {
//         return res.status(400).send("Seu email está undefined!");
//     }
//     if (!senha) {
//         return res.status(400).send("Sua senha está undefined!");
//     }

//     usuarioModel.autenticar(email, senha)
//         .then(resultadoAutenticar => {
//             if (resultadoAutenticar.length == 1) {
//                 const usuario = resultadoAutenticar[0];

//                 res.json({
//                     id: usuario.idJogadores,
//                     email: usuario.email,
//                     nomeTVar: usuario.nomeTVar
//                 });
//             } else if (resultadoAutenticar.length == 0) {
//                 res.status(403).send("Email e/ou senha inválido(s)");
//             } else {
//                 res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//             }
//         })
//         .catch(erro => {
//             console.error(erro);
//             res.status(500).json(erro.sqlMessage || "Erro no servidor");
//         });
// }

function criarT(req, res) {
    var nomeTVar = req.body.nomeTServer;
    var participantesVar = req.body.participantesServer;
    var descricaoVar = req.body.descricaoServer;
    var dtInicioVar = req.body.dtInicioServer;
    var dtFimVar = req.body.dtFimServer;

    const {
        plataformasServer,
        formatoServer,
        resultadoServer,
        tipoInscricaoSever
    } = req.body 

    if (nomeTVar == undefined) {
        res.status(400).send("O nome do torneio está undefined!");
    } else if (participantesVar == undefined) {
        res.status(400).send("Os participantes estão undefined!");
    } else if (descricaoVar == undefined) {
        res.status(400).send("A descrição está undefined!");
    } else {
        criarTModel.criarT(nomeTVar, participantesVar, descricaoVar, dtInicioVar, dtFimVar,plataformasServer.join(', '),formatoServer,resultadoServer, tipoInscricaoSever)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.error(erro);
                res.status(500).json(erro.sqlMessage || "Erro ao cadastrar torneio");
            });
    }
}


module.exports = {
    // autenticar,
    criarT
}