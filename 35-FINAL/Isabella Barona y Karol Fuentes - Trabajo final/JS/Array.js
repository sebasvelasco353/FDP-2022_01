var url = 'https://swapi.dev/api/planets';
let planets = [];

async function run(){
    let response = await fetch(url);
    planets = await response.json();
}

function imprimir(){
    console.log("Found planets:")
      planets.results.forEach(planets => {
        console.log("   ✦  " + planets.name); 
      });
}

run();
