const conexao = require('../config/db');

const FilmeModel = {
    // Lista todos os filmes
    listarTodos: (callback) => {
        const sql = 'SELECT * FROM tbl_filme';
        conexao.query(sql, (erro, resultados) => {
            if (erro) return callback(erro, null);
            callback(null, resultados);
        });
    },

    // Busca um filme pelo ID
    buscarPorId: (id, callback) => {
        const sql = 'SELECT * FROM tbl_filme WHERE id = ?';
        conexao.query(sql, [id], (erro, resultado) => {
            if (erro) return callback(erro, null);
            callback(null, resultado[0]);
        });
    },

    // Filtra filmes por nome ou parte da sinopse (query string)
    filtrarPorNomeOuSinopse: (termo, callback) => {
        const sql = `
            SELECT * FROM tbl_filme 
            WHERE nome LIKE ? OR sinopse LIKE ?
        `;
        const valor = `%${termo}%`;
        conexao.query(sql, [valor, valor], (erro, resultados) => {
            if (erro) return callback(erro, null);
            callback(null, resultados);
        });
    }
};

module.exports = FilmeModel;
