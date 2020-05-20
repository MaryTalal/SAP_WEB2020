async function getPokemonInfo(url) {
    try{
        let response = await fetch(url);
        if (response.ok){
            let json = await response.json();
            const name = ("<span>" + "Покемон: " + json.forms[0].name + "<br>" + "</span>");
            const abilities = ("<span>" + "Способности: " + json.abilities[0].ability.name + "<br>" + "</span>");
            let effect = [];
            for (let i = 0; i < json.abilities.length; i++) {
                let response = await fetch(json.abilities[i].ability.url);
                if (response.ok){
                    //let json2 = await response.json();
                    effect += "<span>" + "Cпособность: " + (json.effect_entries[0].effect) + "<br>" + "</span>";
                }
            }
        let elem = document.getElementById("app");
        elem.innerHTML = name + abilities + effect;
        }       
    }catch (e) {
        let elem = document.getElementById("app");
        elem.innerHTML = "ERROR " + e.toString();
    }   
}
