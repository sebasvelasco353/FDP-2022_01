const url = "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/27-taller2/user.json";

const filterSelect = document.querySelector("#filtro");
const resultsContainer = document.querySelector("#resultsContainer");
const resultsMensajes = document.querySelector("#resultsMensajes");



//Es el resultado del filtro, los datos que sí sirven y se quieren mostrar en la pantalla//

let jsonRes;
let data;
let mensajes;

async function run() {
    const res =  await fetch(url);
    jsonRes = await res.json();
    mensajes = jsonRes.mensajes;
    data = jsonRes.cases.filter(p => p.smoker === true);
    data = jsonRes.cases.filter(p => p.closed === true);
    data = jsonRes.cases.filter(p => p.prev_surgery === true);
    
    
    
    console.log(jsonRes);
    



    draw();
    
}


//
function handleFilter(e) {
    console.log(e.target.value);
    
    //= 1) array =jsonRes 2)cases =  Arreglo de personas 3)Se filtra 4) Dentro de las{} está el criterio que define si hace parte o no de los resultados//
    
    //proceso= cada uno de los elementos los vamos a llamar p y vamos a revisar "si p.smoker" es true devuelvo el elemento y si no se ignora//
    
    data = jsonRes.cases.filter(p => p.smoker === (e.target.value === 'true'));
    data = jsonRes.cases.filter(p => p.closed === (e.target.value === 'true'));
    data = jsonRes.cases.filter(p => p. prev_surgery === (e.target.value === 'true'));


    draw();
  
}

function draw() {
    resultsContainer.innerHTML = ""; // delete all elements inside the container
    

    data.forEach(element => { // create an element for every obj in the array//
        console.log(`desde foreach: ${element.name}`);
        const opt = document.createElement('div');
        opt.innerHTML = `<b><p><br>${element.name}</p> </b> <b><p> Edad: ${element.age} </p></b> height: ${element.height} <b><p> smoker: ${element.smoker} </p></b> <b><p> closed: ${element.closed}  </p></b> <b><p> prev_surgery: ${element.prev_surgery} </p></b>` ;
        resultsContainer.appendChild(opt); // add the element to the container//
        
    });

    mensajes.forEach(element => {
        console.log(`desde foreach: ${element.name}`);
        const opt = document.createElement('div');
        opt.innerHTML = `<b><p>${element.sender}</b> (${element.timestamp}) <br> Para: Mi, ${element.cc} </p> ${element.message}`;
        resultsMensajes.appendChild(opt)
    })

    
    
}




run();

