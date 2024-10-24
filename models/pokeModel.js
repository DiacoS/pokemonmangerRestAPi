let pokemonList = []; // Simpel array for at gemme Pokémon
let currentId = 1;

// Opret ny Pokémon
exports.create = (pokemonData) => {
    const newPokemon = {
        id: currentId++,
        ...pokemonData
    };
    pokemonList.push(newPokemon);
    return newPokemon;
};

// Hent alle Pokémon
exports.findAll = () => {
    return pokemonList;
};

// Hent Pokémon ved ID
exports.findById = (id) => {
    return pokemonList.find(pokemon => pokemon.id == id);
};

// Opdater Pokémon
exports.update = (id, updatedData) => {
    const pokemonIndex = pokemonList.findIndex(pokemon => pokemon.id == id);
    if (pokemonIndex === -1) return null;
    pokemonList[pokemonIndex] = { id: Number(id), ...updatedData };
    return pokemonList[pokemonIndex];
};

// Slet Pokémon
exports.delete = (id) => {
    const pokemonIndex = pokemonList.findIndex(pokemon => pokemon.id == id);
    if (pokemonIndex === -1) return false;
    pokemonList.splice(pokemonIndex, 1);
    return true;
};
