const express = require('express');
const app = express();
const port = 3000;

const pokemonRoutes = requires('./routes/pokemonRoutes');

app.use(express.static('public'));
app.use('/api/pokemon', pokemonRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}) ;