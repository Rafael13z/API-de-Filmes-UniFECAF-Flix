const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/filmeController');

// Rota para listar todos os filmes
router.get('/v1/controle-filmes/filme', filmeController.listarFilmes);

// Rota para buscar filme pelo ID
router.get('/v1/controle-filmes/filme/:id', filmeController.buscarFilmePorId);

// Rota para filtrar filmes por nome ou sinopse (query string: ?nome=...)
router.get('/v1/controle-filmes/filtro/filme', filmeController.filtrarFilmes);

module.exports = router;
