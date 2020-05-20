import addName from './AboutMe.js';
import getPokemonInfo from './Pockemon.js';
const url = 'https://pokeapi.co/api/v2/pokemon/ditto/';
function addPokemon() {
    return getPokemonInfo(url);
}
onload = function loadPage() {
    document.getElementById("homeTab").onclick=addName;
    document.getElementById("pokemonTab").onclick=addPokemon;
    addName();
}
