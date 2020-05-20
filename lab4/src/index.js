import Pockemon from './Pockemon.js';
import getAboutMe from './getAboutMe.js';
const url = 'https://pokeapi.co/api/v2/pokemon/ditto/';
function addPokemon() {
    return getPokemonInfo(url);
}

onload = function loadPage() {
    document.getElementById("AboutMeTab").onclick=addName;
    document.getElementById("PokemonTab").onclick=addPokemon;
    addName();
}
