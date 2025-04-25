async function searchPokemon() {
    const name = document.getElementById('pokemonName').value;
    const resultDiv = document.getElementById('pokemonResult');

    resultDiv.innerHTML= 'Loading...';

    try {
        const reponse = await fetch(`/api/pokemon/${name}`);
        const data = await reponse.json();

        resultDiv.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Height:</strong> ${data.height}</p>
            <p><strong>Weight:</strong> ${data.weight}</p>
            <p><strong>Type:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
        `;
    }
    catch (error){
        resultDiv.innerHTML = `<p>Pokemon not found. Try again!</p>`
    }

}