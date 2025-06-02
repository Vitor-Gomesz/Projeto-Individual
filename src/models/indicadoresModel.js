function buscarIndicadores(idUsuario) {
    const instrucao = `
        SELECT
          ROUND(SUM(vitorias) / COUNT(*), 2) AS taxa_vitoria,
          ROUND(SUM(kills) / NULLIF(SUM(deaths), 0), 2) AS kd,
          SUM(vitorias) AS total_vitorias
        FROM historico
        WHERE fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}