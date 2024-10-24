const pokemonModel = require('../models/pokeModel');

// Opret Pokémon (Create)
exports.createPokemon = (req, res) => {
    const newPokemon = pokemonModel.create(req.body);
    res.status(201).json({ message: 'Pokémon oprettet!', pokemon: newPokemon });
};

// Læs alle Pokémon (Read)
exports.getAllPokemon = (req, res) => {
    const allPokemon = pokemonModel.findAll();
    res.json(allPokemon);
};

// Læs én Pokémon (Read)
exports.getPokemonById = (req, res) => {
    const pokemon = pokemonModel.findById(req.params.id);
    if (!pokemon) {
        return res.status(404).json({ error: 'Pokémon ikke fundet' });
    }
    res.json(pokemon);
};

// Opdater Pokémon (Update)
exports.updatePokemon = (req, res) => {
    const updatedPokemon = pokemonModel.update(req.params.id, req.body);
    if (!updatedPokemon) {
        return res.status(404).json({ error: 'Pokémon ikke fundet' });
    }
    res.json({ message: 'Pokémon opdateret!', pokemon: updatedPokemon });
};

// Slet Pokémon (Delete)
exports.deletePokemon = (req, res) => {
    const deleted = pokemonModel.delete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ error: 'Pokémon ikke fundet' });
    }
    res.json({ message: 'Pokémon slettet!' });
};
