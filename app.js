const express = require('express');
const morgan = require('morgan');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev')); // Logger
app.use(express.json()); // For at kunne parse JSON-body data

// Routes
app.use('/pokemon', pokemonRoutes);

// Fejlhåndtering af ukendte ruter
app.use((req, res) => {
    res.status(404).json({ error: 'Ruten blev ikke fundet' });
});

app.listen(port, () => {
    console.log(`Serveren kører på http://localhost:${port}`);
});
