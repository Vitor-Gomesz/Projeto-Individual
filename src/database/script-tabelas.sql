-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE TABLE jogadores (
    idJogadores INT AUTO_INCREMENT PRIMARY KEY,
    gamertag VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    win_rate DECIMAL(5,2),
    kd_ratio DECIMAL(5,2),
    operadorMaisUsado VARCHAR(50),
    nivel INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE torneios (
    idTorneios INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    descricao VARCHAR(500),
    dtInicio DATE NOT NULL,
    dtFim DATE,
    statusTorneio ENUM("Inativo", "Inicializado", "Finalizado"), -- Corrigido
    dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Corrigido nome
);

CREATE TABLE jogadores_dos_torneios (
    fkTorneios INT,
    fkJogadores INT,
    nomeTime VARCHAR(50),
    PRIMARY KEY (fkTorneios, fkJogadores),
    FOREIGN KEY (fkTorneios) REFERENCES torneios(idTorneios),
    FOREIGN KEY (fkJogadores) REFERENCES jogadores(idJogadores)
);

CREATE TABLE historico (
    idHistorico INT AUTO_INCREMENT PRIMARY KEY,
    fkJogadores INT,
    fkTorneios INT,
    resultado VARCHAR(40),
    operadorUsado VARCHAR(50),
    mapa VARCHAR(100),
    pontuacao INT, -- Corrigido
    dtPartida TIMESTAMP,
    FOREIGN KEY (fkJogadores) REFERENCES jogadores(idJogadores), -- Corrigido nome
    FOREIGN KEY (fkTorneios) REFERENCES torneios(idTorneios)
);

CREATE TABLE ranking (
    idRanking INT AUTO_INCREMENT PRIMARY KEY,
    fkJogadores INT,
    fkTorneios INT,
    ranking INT,
    pontos INT,
    FOREIGN KEY (fkJogadores) REFERENCES jogadores(idJogadores),
    FOREIGN KEY (fkTorneios) REFERENCES torneios(idTorneios)
);

-- Teste de SELECT
SELECT * FROM jogadores;