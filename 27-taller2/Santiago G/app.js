const url = 'https://raw.githubusercontent.com/Santygr21/FDP-2022_01/main/27-taller2/user.json'; 
gsap.registerPlugin(ScrollTrigger);

//Animaciones pantalla principal
gsap.from(".Bienvenida",{
    y: '-100%',
    duration: 0.5,
});

gsap.from(".mensaje_binvenida",{
    y: '-100%',
    duration: 0.5,
});

gsap.from(".menu_side",{
    x: '-100%',
    duration: 0.5,
});

gsap.from(".menu_icon",{
    y: '-100%',
    duration: 0.5,
});

gsap.from(".container",{
    x: '-100%',
    duration: 1.5,
});

gsap.from(".message_icon",{
    x: '100%',
    duration: 1,
});

//definición de variables
var menu_side = document.getElementById("menu_side");
var icon_menu = document.getElementById("icon_menu");
var body = document.getElementById("body");
var icon = document.getElementById("icon_animation");
var move = document.getElementById("icon_move");
const filterSelect = document.getElementById("filter")
let data;
let message;
let jsonRes;

//async function
async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases;
    message = jsonRes.messages;

    results = filterBy(filterSelect.value);
    console.log(results);
    console.log(message);
    draw_data();
}

//función para el filtro
function filterBy(criteria){
    const filters = {
        'all' : data,
        'age<50' : data.filter(p => p.age < 50),
        'age>50' : data.filter(p => p.age > 50),
        'closed' : data.filter(p => p.closed === true),
        'open' : data.filter(p => p.closed === false),
        'previous Surgery' : data.filter(p => p.prev_surgery === true),
    }
    return filters[criteria];
}

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    console.log(results);
    draw_data();
})

//función para pintar en pantalla la información del filtro y sus animaciones
function draw_data() {
    display.innerHTML = '';
    results.forEach(element => {
        var opt = document.createElement('div');
        opt.className = "display_element"
        opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Age: ${element.age}<br>Height: ${element.height}<br>Smoker: ${element.smoker}<br>Country: ${element.country}<br>Bloodtype: ${element.bloodtype}<br>Closed case: ${element.closed}<br>Previous surgeries: ${element.prev_surgery}</p>`;
        display.appendChild(opt);
        document.getElementById('Info').style.display='block';
        document.getElementById('message_page').style.display='none';
        document.getElementById('scrollbar').style.display='none';
        document.getElementById('filtro').style.display='block';
        document.getElementById('new_email').style.display='none';
        document.getElementById('formulario').style.display='none';
        document.getElementById('cantidad').style.display='block';

    });

    {document.getElementById('cantidad').innerHTML = "";
        const opt = document.createElement('h4');
        opt.innerHTML = `Se encontraron ${results.length} resultados`;
        document.getElementById('cantidad').appendChild(opt);
    }
}

function initial_animation(){
    gsap.from(".Bienvenida",{
        y: '-100%',
        duration: 0.5,
    });
    
    gsap.from(".mensaje_binvenida",{
        y: '-100%',
        duration: 0.5,
    });
    
    gsap.from(".menu_side",{
        x: '-100%',
        duration: 0.5,
    });
    
    gsap.from(".menu_icon",{
        y: '-100%',
        duration: 0.5,
    });
    
    gsap.from(".container",{
        x: '-100%',
        duration: 1.5,
    });
    
    gsap.from(".message_icon",{
        x: '100%',
        duration: 1,
    });
}

//función para pintar en pantalla la información de los mensajes y sus animaciones
function draw_messages(){
    displayM.innerHTML = '';
    message.forEach(element => {
        var opt = document.createElement('div');
        opt.className = "display_elementM"
        opt.innerHTML = `<p><b>${element.sender}</b>(${element.timestamp})<br>${element.cc}</p><p><br>${element.message}`;
        displayM.appendChild(opt);
        document.getElementById('filtro').style.display='none';
        document.getElementById('Info').style.display='none';
        document.getElementById('message_page').style.display='block';
        document.getElementById('scrollbar').style.display='block';
        document.getElementById('new_email').style.display='block';
        document.getElementById('formulario').style.display='none';
        document.getElementById('cantidad').style.display='none';

        
    });

    gsap.from(".message_page",{
        x: '-100%',
        duration: 1,
    });

    gsap.from(".fa-pen",{
        x: '-100%',
        duration: 1,
    });

    gsap.from(".scrollbar",{
        y: '100%',
        duration: 1,
    });

}

//función para pintar en pantalla el formulario
function draw_formulario(){
        document.getElementById('message_page').style.display='none';
        document.getElementById('scrollbar').style.display='none';
        document.getElementById('new_email').style.display='none';
        document.getElementById('formulario').style.display='block';
        document.getElementById('cantidad').style.display='none';
        gsap.from(".formulario_box",{
            x: '-100%',
            duration: 1,
        });
}

//Alertas al enviar el formulario
function enviado(){
    if (email.value===''|| asunto.value==='' || mensaje.value===''){
        swal("Error","Por favor digite todos los campos", "error");
    }else{
        swal("", "Tu mensaje ha sido enviado", "success");
        Reinicio();
    }}

    // función para el botón de eliminar en el formulario
    function eliminar(){
        document.getElementById("email").value="";
        document.getElementById("asunto").value="";
        document.getElementById("mensaje").value="";
    }

//animación del menú
function movement_menu(){
    body.classList.toggle("menu__animation");
    menu_side.classList.toggle("menu_side_animation");
    icon.classList.toggle("icon_animation");
    move.classList.toggle("icon_move");
}



run();

