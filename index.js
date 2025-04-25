const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files (html, css, js)
app.use(express.static('public'));

// API route to fetch Pokemon data
app.get('/api/pokemon/:name', async(req, res)=> {
    const pokemonName = req.params.name.toLowerCase();
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        res.json(response.data);

    }
    catch (error) {
        res.status(404).send('Pokemon not found');
    }  
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})