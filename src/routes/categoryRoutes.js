const express = require('express');
const { getCategories } = require('../controllers/CategoryController');

const router = express.Router();

// Definindo a rota para obter categorias
router.get('/search', getCategories);

module.exports = router;