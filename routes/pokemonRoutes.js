const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Route: /api/pokemon/:name
router.get('/:name', pokemonController.getPokemonByName);

module.exports = router;