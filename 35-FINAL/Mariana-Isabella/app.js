const podeCard = document.querySelector('[data-pokemonCard]');
const pokeName = document.querySelector('[data-pokemonName]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-containerImage]');
const pokeId = document.querySelector('[data-pokeID]');
const pokeTypes = document.querySelector('[data-pokeTypes]');
const pokeStats = document.querySelector('[data-pokeStats]');

//Mapear diccionario para que cada tipo de pokemon tenga un color

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

//función searchPokemon en el onsubmint del form para cuando el usuario ingrese algo en el input//
//"form" representa una sección de un documento que contiene controles interactivos que permiten a un usuario enviar información a un servidor web.//
//el preventdefault es porque cuando se hace un submit se envía el form entonces con esto se cancela el submit del form// 
//event.target.pokemon para tener el valor del input que está en html "pokemon"y así se tiene el valor//
//en el fetch está en nom de la api y el nombre del pokemon//
//de data tenemos una respuesta y llama una función que se llama renderPokemonData enviando la repsuesta//
const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
}

//se crea la función anterior renderPokemonData//
//recibe la data y lo primero que se obtiene son los sprites//
//los sprites son las imagenes y los otros dos que son stadisticas y tipos salen directamente//
//ELEMENTOS CREADOS AL INICIO//
//en el pokeName se le pone el name que viene de data//
//al pokeImg se le setea un atributo src y usamos el sprite que habíamos obtenido//
//Al pokeId se le va a poner un text content de número y de data pbtenemos el id// 

const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;

    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);

}
//funcion con un parametro types
//color uno constante va a ir a buscar en typecolors y va a tomar el primer type y va a terneer el type y el name
//color dos en el segundo lugar del array donde viene los types pregunta si hay un type si hay otro y si no hay otro se usa el default

//a la pokeimg se le da un estilo para el radial dradient que tengan unos porcentajes de colores, color uno de fondo, color dos de las pelotitas
//background de unos pixeles en si
const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 35%)`;
    pokeImg.style.backgroundSize = '5px 5px';
}
//funcion renderPokemonTypes que tiene el parametro types y tiene el innerHtml para borrar los que tenía y poner los nuevos
//por cada uno de los tupos que recibamos, pueden ser uno o dos, y selecciona un type
//crea un elemento que se llamatypeTextElement, se agrega un div
//ese elemento va a tener un color igual a = selecciona segun un tipo especifico
//a poketypes se le hace un appenchild con el typetextelement. Si viene uno solo se pone uno solo y si son los dos pues los dos

const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}
//funcion renderPokemonStats
//con el innherit se borra lo anterior 
// se pone cada una de las estadisticas
//Se crea un elemento statElement y dos más izq (estadistica) y derecha (porcentaje)datos

//al primero que es statElementName se le da el valor stat.stat.name que asi viene de la api
//al segundo que es statElementAmount se le da el valor stat.base_stat que asi viene de la api
//al statElement se le ponen los dos elementos que se crearon también 
// a las pokestats se le ponen el elemento en sí (toda la info)

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat =>{
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");

        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;

        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });

}
