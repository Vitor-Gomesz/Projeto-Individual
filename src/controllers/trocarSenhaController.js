var trocarSenhaModel = require("../models/trocarSenhaModel");

function trocarSenha(req, res) {
  var idJogador = req.body.idJogadorServer;
  var gamertag = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var emailN = req.body.emailNServer;
  var senhaN = req.body.senhaNServer;

  trocarSenhaModel.buscarUsuarioPorNomeEmail(gamertag, email)
    .then((resultado) => {
      if (resultado.length === 0) {
        return res.status(404).json({ erro: "Usuário não encontrado." });
      }

      var jogador = resultado[0];

      if (jogador.senha !== senha) {
        return res.status(401).json({ erro: "Senha antiga incorreta." });
      }

      return trocarSenhaModel.atualizarSenhaEmail(idJogador, senhaN, emailN);
    })
    .then(() => {
      res.status(200).json({ mensagem: "Senha (e email, se informado) alterado com sucesso!" });
    })
    .catch((erro) => {
      console.error("Erro ao trocar senha:", erro);
      res.status(500).json({ erro: "Erro interno ao trocar senha." });
    });
}

module.exports = {
  trocarSenha
};