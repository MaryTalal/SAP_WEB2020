export default async function getPokemonInfo(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            const name = ("<span>" + "Покемон: " + json.forms[0].name + "<br>" + "</span>"),
            abilities = ("<span>" + "Способности: " + json.abilities[0].ability.name + "<br>" + "</span>");
            let effect = [];
            for (let i = 0; i < json.abilities.length; i++) {
                const abilitiesResponse = await fetch(json.abilities[i].ability.url);
                if (abilitiesResponse.ok) {
                    let abilitiesJson = await abilitiesResponse.json();
                    effect.push("<span>" + "Cпособность: " + (abilitiesJson.effect_entries[0].effect) + "<br>" + "</span>");
                }
            }
            let elem = document.getElementById("app");
            elem.innerHTML = name + abilities + effect;
        }
    } catch (e) {
         let elem = document.getElementById("app");
         elem.innerHTML = "ERROR " + e.toString();
     }
}