var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O criarT MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idJogadores, gamertag, email FROM jogadores WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function criarT(nomeTVar, participantes, descricao, dtInicio, dtFim,plataformasServer, formatoServer, resultadoServer, tipoInscricaoSever) {
    console.log("ACESSEI O criarT MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeTVar, participantes, descricao, dtInicio, dtFim);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO torneios (nome, dtInicio, dtFim, descricao, qtdParticipantes, plataformas, formato, resultadoPor, tipoInscricao, statusTorneio)
        VALUES ('${nomeTVar}', '${dtInicio}', '${dtFim}', '${descricao}', '${participantes}', '${plataformasServer}', '${formatoServer}', '${resultadoServer}', '${tipoInscricaoSever}', '${statusTorneio}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    criarT
};