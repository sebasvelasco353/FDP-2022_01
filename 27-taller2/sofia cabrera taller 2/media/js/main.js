console.log('Active')
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const xhttp = new XMLHttpRequest();


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




async function obtainDates(){

    const response = await fetch("http://127.0.0.1:5500/media/js/json.json");
    const json = await response.json();
    const nameM = json.name;
    const email = json.email;
    let res = document.querySelector('#nav1');
    res.innerHTML +='';
    res.innerHTML += `${nameM}`;
    let res2 = document.querySelector('#nav2');
    res2.innerHTML +='';
    res2.innerHTML += `${email}`;
    
}

async function Dates(){

    const response = await fetch("http://127.0.0.1:5500/media/js/json.json");
    const json = await response.json();
    const nameM = json.name;
    const email = json.email;
    let res = document.querySelector('#name');
    res.innerHTML +='';
    res.innerHTML += `${nameM}`;
    let res2 = document.querySelector('#email');
    res2.innerHTML +='';
    res2.innerHTML += `${email}`;
    
}



async function Messages(){

    const response = await fetch("http://127.0.0.1:5500/media/js/json.json");
    const json = await response.json();
    const Remite = json.messages;
    let res = document.querySelector('#Mensaje');
    res.innerHTML +=`<tr>
    <th>Remite</th>
    <th>Mensaje</th>
    <th>fecha</th>
    </tr>`;

    for (let i = 0; i < Remite.length; i++){
        const Remite2 = json.messages[i].sender;
        const Msj = json.messages[i].message;
        const fecha = json.messages[i].timestamp;
        res.innerHTML += `
        <tr><td>${Remite2}</td>
        <td>${Msj}</td>
        <td>${fecha}</td></tr>`
        ;

    }
}


async function Cases(){

    const response = await fetch("http://127.0.0.1:5500/media/js/json.json");
    const json = await response.json();
    const Paciente = json.cases;
    let res = document.querySelector('#casos');
    res.innerHTML +='';

    for (let i = 0; i < Paciente.length; i++){
        const Nombre = json.cases[i].name;
        const Apellido = json.cases[i].last_name;
        const edad = json.cases[i].age;
        const Altura = json.cases[i].height;
        const fumador = json.cases[i].smoker;
        const ciudad = json.cases[i].country;
        const Sangre = json.cases[i].bloodtype;
        var cirugias = json.cases[i].prev_surgery;
        if (cirugias == true){
            cirugias = "Si"
        }
        else{
            cirugias = "No"
        }


        res.innerHTML += `<table>
        <tr><th>Paciente</th></tr>
        <tr><td> ${Nombre} ${Apellido}</td><td> Edad: ${edad}</td></tr>
        <tr><td> RH: ${Sangre}</td><td> Ciudad ${ciudad}</td></tr>
        <tr><td> Estatura ${Altura}</td><td> Cirugias anteriores ${cirugias}</td></tr>
        <div class="product-card">
    <div class="product-image">
        <img src="media/images/Casos.png" class="product-thumb" alt="">
        
        <button class="card-btn">Edit Case</button>
    </div>
    </div>
    </table>`;

    }
    
}


async function Search(){

    const response = await fetch("http://127.0.0.1:5500/media/js/json.json");
    const json = await response.json();
    const Busqueda = json.cases;

    let filtroE = Busqueda.filter(function(edad){
        return edad.age>=50;
    });
    console.log(filtroE[0].last_name)

    let filtroe = Busqueda.filter(function(edad){
        return edad.age < 50;
    });
    let CirugiaS = Busqueda.filter(function(cirugia){
        return cirugia.prev_surgery === true;
    });

    let CirugiaN = Busqueda.filter(function(cirugia){
        return cirugia.prev_surgery === false;
    });

    let res = document.querySelector('#Busqueda');
    res.innerHTML +=`
    <thead><th>Num</th>
    <th>Name</th>
    <th>Age</th>
    <th>Heigth</th>
    <th>Smoker</th>
    <th>Country</th>
    <th>Bloodtype</th>
    <th>Status</th>
    <th>Cirugies</th>
    </thead>`;

    res.innerHTML +=`
    <tr><th COLSPAN=9 >Casos mayores de 49 años </th>
    </tr>`;

    for (let i = 0; i < filtroE.length; i++){
        const Nombre = filtroE[i].name;
        const Apellido = filtroE[i].last_name;
        const edad = filtroE[i].age;
        const Altura = filtroE[i].height;
        const fumador = filtroE[i].smoker;
        const ciudad = filtroE[i].country;
        const Sangre = filtroE[i].bloodtype;
        var cirugias = filtroE[i].prev_surgery;
        var Status = filtroE[i].closed;
        if (cirugias == true){
            cirugias = "Si"
        }
        else{
            cirugias = "No"
        }
        if (Status == true){
            Status = "Cerrado"
        }
        else{
            Status = "Abierto"
        }
        res.innerHTML += `
        <tr><td>${i+1}</td><td> ${Nombre} ${Apellido}</td><td>${edad}</td>
        <td>${Altura}</td><td>${fumador}</td><td>${ciudad}</td>
        <td>${Sangre}</td><td>${Status}</td><td>${cirugias}</td></tr>
        `;



    }

    res.innerHTML +=`
    <tr><th COLSPAN=9 >Casos menores de 50 años </th>
    </tr>`;

    for (let i = 0; i < filtroe.length; i++){
        const Nombre = filtroe[i].name;
        const Apellido = filtroe[i].last_name;
        const edad = filtroe[i].age;
        const Altura = filtroe[i].height;
        const fumador = filtroe[i].smoker;
        const ciudad = filtroe[i].country;
        const Sangre = filtroe[i].bloodtype;
        var cirugias = filtroe[i].prev_surgery;
        var Status = filtroe[i].closed;
        if (cirugias == true){
            cirugias = "Si"
        }
        else{
            cirugias = "No"
        }
        if (Status == true){
            Status = "Cerrado"
        }
        else{
            Status = "Abierto"
        }
        res.innerHTML += `
        <tr><td>${i+1}</td><td> ${Nombre} ${Apellido}</td><td>${edad}</td>
        <td>${Altura}</td><td>${fumador}</td><td>${ciudad}</td>
        <td>${Sangre}</td><td>${Status}</td><td>${cirugias}</td></tr>`;



    }

    res.innerHTML +=`
    <tr><th COLSPAN=9 >Pacientes con cirugias anteriores </th>
    </tr>`;


    for (let i = 0; i < CirugiaS.length; i++){
        const Nombre = CirugiaS[i].name;
        const Apellido = CirugiaS[i].last_name;
        const edad = CirugiaS[i].age;
        const Altura = CirugiaS[i].height;
        const fumador = CirugiaS[i].smoker;
        const ciudad = CirugiaS[i].country;
        const Sangre = CirugiaS[i].bloodtype;
        var cirugias = CirugiaS[i].prev_surgery;
        var Status = CirugiaS[i].closed;
        if (cirugias == true){
            cirugias = "Si"
        }
        else{
            cirugias = "No"
        }
        if (Status == true){
            Status = "Cerrado"
        }
        else{
            Status = "Abierto"
        }
        res.innerHTML += `
        <tr><td>${i+1}</td><td> ${Nombre} ${Apellido}</td><td>${edad}</td>
        <td>${Altura}</td><td>${fumador}</td><td>${ciudad}</td>
        <td>${Sangre}</td><td>${Status}</td><td>${cirugias}</td></tr>
        `;



    }

    res.innerHTML +=`
    <tr><th COLSPAN=9 >Pacientes sin cirugias anteriores </th>
    </tr>`;

    for (let i = 0; i < CirugiaN.length; i++){
        const Nombre = CirugiaN[i].name;
        const Apellido = CirugiaN[i].last_name;
        const edad = CirugiaN[i].age;
        const Altura = CirugiaN[i].height;
        const fumador = CirugiaN[i].smoker;
        const ciudad = CirugiaN[i].country;
        const Sangre = CirugiaN[i].bloodtype;
        var cirugias = CirugiaN[i].prev_surgery;
        var Status = CirugiaN[i].closed;
        if (cirugias == true){
            cirugias = "Si"
        }
        else{
            cirugias = "No"
        }
        if (Status == true){
            Status = "Cerrado"
        }
        else{
            Status = "Abierto"
        }
        res.innerHTML += `
        <tr><td>${i+1}</td><td> ${Nombre} ${Apellido}</td><td>${edad}</td>
        <td>${Altura}</td><td>${fumador}</td><td>${ciudad}</td>
        <td>${Sangre}</td><td>${Status}</td><td>${cirugias}</td></tr>
        `;



    }

}

obtainDates();
Dates();
Messages();
Cases();
Search();


/*
//document.querySelectorAll('#boton').addEventListener();
function DatesJ() {

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'media//js/json.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText.messages);
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            console.log(datos);
            res.innerHTML +='';

            for (let item of datos){

                res.innerHTML += `${NameM}`;
                console.log(item.name);
            }
        }
    }

    
}

DatesJ();
*/
