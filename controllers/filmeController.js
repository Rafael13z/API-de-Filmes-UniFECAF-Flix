const FilmeModel = require('../models/filmeModel');

// Lista todos os filmes
const listarFilmes = (req, res) => {
    FilmeModel.listarTodos((erro, filmes) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao buscar filmes.' });
        }
        res.status(200).json(filmes);
    });
};

// Busca um filme pelo ID
const buscarFilmePorId = (req, res) => {
    const id = req.params.id;
    FilmeModel.buscarPorId(id, (erro, filme) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao buscar o filme.' });
        }
        if (!filme) {
            return res.status(404).json({ mensagem: 'Filme não encontrado.' });
        }
        res.status(200).json(filme);
    });
};

// Filtra filmes por nome ou sinopse
const filtrarFilmes = (req, res) => {
    const termo = req.query.nome;

    if (!termo) {
        return res.status(400).json({ mensagem: 'Parâmetro "nome" é obrigatório.' });
    }

    FilmeModel.filtrarPorNomeOuSinopse(termo, (erro, filmes) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao filtrar filmes.' });
        }
        res.status(200).json(filmes);
    });
};

module.exports = {
    listarFilmes,
    buscarFilmePorId,
    filtrarFilmes
};
