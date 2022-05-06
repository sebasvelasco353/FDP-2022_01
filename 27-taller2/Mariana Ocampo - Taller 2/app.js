const url = 'https://raw.githubusercontent.com/IBaronap/FDP-2022_01/main/27-taller2/user.json';


// funciones 
function displayinicio() {
    document.getElementById('Inicio').style.display ='block';
    document.getElementById('Mensaje').style.display = 'none';
    document.getElementById('dates_pacientes').style.display = 'none';
}

function displayPacientes() {
    document.getElementById('Inicio').style.display = 'none';
    document.getElementById('Mensaje').style.display = 'none';
    document.getElementById('dates_acientes').style.display = 'block';
}

function displayMensajes() {
    document.getElementById('Mensaje').style.display ='flex';
    document.getElementById('dates_pacientes').style.display = 'none';
    document.getElementById('Inicio').style.display = 'none';
    
}
//const filterSelect = document.getElementById ('filter');
//const displayp = document.querySelector('#display_Pacientes')
//const displaym = document.querySelector('#display_mensaje')

let jsonRes;
let data;
let Mensaje;

// Async

async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases;
    mensajes = jsonRes.messages;
    results = filterBy(filterSelect.value);
    draw();
}

//Filtro pacientes
function filterBy(criteria) {
    const filters = {
    'todos': data,
    'cerrado': data.filter(p => p.closed === true),
    'abierto': data.filter(p => p.closed === false),
    'menor_50': data.filter(p => p.age < 50),
    'mayor_50': data.filter(p => p.age > 50),
    'ciru_prev': data.filter(p => p.prev_surgery === true),
    }
    return filters[criteria];
}

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    console.log(results);
    draw();
})

//display de todos los datos
function draw() {
    displayp.innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Edad: ${element.age}<br>Altura: ${element.height}<br>Fumador: ${element.smoker}<br>País: ${element.country}<br>Caso: ${element.closed}<br>Tipo de sangre: ${element.bloodtype}<br>Cirugías anteriores: ${element.prev_surgery}</p><br>`;
        displayp.appendChild(opt);
    });

    displaym.innerHTML = "";
    mensajes.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.sender}</b> <font size="2">(${element.timestamp})<br>Para: Mi, ${element.cc}</font></p><p>${element.message}`;
        displaym.appendChild(opt);
    });
    
    {document.getElementById('Count_results').innerHTML = "";
    const opt = document.createElement('h');
    opt.innerHTML = `(${results.length}) resultados`;
    document.getElementById('Count_results').appendChild(opt);
}
}


// filtro pacientes
//function filterBy(criteria) {
  //  const filters = {
    //    'all':data,
      //  'closed': data.filter(p => p.closed === true),
        //'open': data.filter(p => p.closed === false),
        //'age<50': data.filter(p => p.age < 50),
        //'age>50': data.filter(p => p.age > 50),
        //'prev_surgery': data.filter(p => p.prev_surgery === true),
    //}
    //return filters[criteria];
//}

//filterSelect.addEventListener("change", (e) => {
  //  results = filterBy(filterSelect.value);
    //console.log(results);
    //draw();
//(())})

//function draw() {
   // displayp.innerHTML = "";
   // results.forEach(element => {
     //   const opt = document.createElement('div');
       /// opt.className = "display_element";
        //opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Edad: ${element.age}<br>Altura: ${element.height}<br>Fumador: ${element.smoker}<br>País: ${element.country}<br>Caso: ${element.closed}<br>Tipo de sangre: ${element.bloodtype}<br>Cirugías anteriores: ${element.prev_surgery}</p><br>`;
       // displayp.appendChild(opt);
   // });

    //displaym.innerHTML = "";
    //mensajes.forEach(element => {
      //  const opt = document.createElement('div');
        //opt.className = "display_element";
        //opt.innerHTML = `<p><b>${element.sender}</b> <font size="2">(${element.timestamp})<br>Para: Mi, ${element.cc}</font></p><p>${element.message}`;
        //displaym.appendChild(opt);
    //});
    
    //{document.getElementById('Count_results').innerHTML = "";
    //const opt = document.createElement('h');
    //opt.innerHTML = `(${results.length}) resultados`;
    //document.getElementById('Count_results').appendChild(opt);
    //}
    //}
