var database = require("../database/config")


function enviarEstatisticas(gamertag, winrate, kd, pontuacaoT) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", gamertag, winrate, kd, pontuacaoT);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
     SET SQL_SAFE_UPDATES = 0;

        UPDATE jogadores
        SET win_rate = ${winrate},
        kd_ratio = ${kd}
        WHERE gamertag = '${gamertag}';

        INSERT INTO historico (fkJogadores, win_rate, kd_ratio)
        SELECT idJogadores, win_rate,
        kd_ratio
        FROM jogadores
        WHERE gamertag = '${gamertag}';

        UPDATE historico as h
        JOIN jogadores as j ON h.fkJogadores = j.idJogadores
        SET h.pontuacao = ${pontuacaoT}
        WHERE j.gamertag = '${gamertag}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviarEstatisticas
};