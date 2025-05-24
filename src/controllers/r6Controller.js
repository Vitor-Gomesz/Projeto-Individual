const axios = require('axios');
require('dotenv').config();

const cacheBuster = () => Math.floor(Date.now() / 1000);

async function buscarPlayerPorNome(req, res) {
  const { plataforma, nome } = req.params;

  try {
    const response = await axios.get(`https://r6.apitab.com/search/${plataforma}/${encodeURIComponent(nome)}?u=${cacheBuster()}`);
    const dados = response.data;

    if (!dados.foundmatch) {
      return res.status(404).json({ msg: 'Jogador não encontrado' });
    }

    // Pega o primeiro jogador encontrado
    const playerData = Object.values(dados.players)[0];
    return res.json(playerData);
  } catch (error) {
    console.error('Erro ao buscar jogador:', error);
    return res.status(500).json({ msg: 'Erro ao consultar API externa' });
  }
}

module.exports = {
  buscarPlayerPorNome
};