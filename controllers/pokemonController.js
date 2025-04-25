const pokemonService = require('../services/pokemonService');

exports.getPokemonByName = async (req, res) => {
    const pokemonName = req.params.name.toLowerCase();

    try {
        const data = await pokemonService.fetchPokemon(pokemonName);
        res.json(data);
    }
    catch (error) {
        res.status(404).send(`Pokemon ${pokemonName} not found`);
    }
};