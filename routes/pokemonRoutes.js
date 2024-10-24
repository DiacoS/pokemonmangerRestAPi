const express = require('express');
const pokemonController = require('../controllers/pokemonController');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

// Opret Pokémon (C - Create)
router.post('/', validationMiddleware.validatePokemon, pokemonController.createPokemon);

// Læs alle Pokémon (R - Read)
router.get('/', pokemonController.getAllPokemon);

// Læs en Pokémon (R - Read)
router.get('/:id', pokemonController.getPokemonById);

// Opdater Pokémon (U - Update)
router.put('/:id', validationMiddleware.validatePokemon, pokemonController.updatePokemon);

// Slet Pokémon (D - Delete)
router.delete('/:id', pokemonController.deletePokemon);

module.exports = router;
