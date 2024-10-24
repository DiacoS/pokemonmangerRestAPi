exports.validatePokemon = (req, res, next) => {
    const { name, type, abilities } = req.body;
    if (!name || !type || !abilities) {
        return res.status(400).json({ error: 'Ufuldstændige Pokémon-oplysninger. Name, type og abilities er påkrævet.' });
    }
    next();
};
