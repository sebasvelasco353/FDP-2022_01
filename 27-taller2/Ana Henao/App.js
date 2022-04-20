var url= "https://raw.githubusercontent.com/AnnaHenao131/FDP-2022_01/main/27-taller2/user.json";

async function run() {
    let respuesta = await fetch(url);
    let resJson = await respuesta.json();

    console.log(resJson);

    let mensajes = resJson.messages;
    let casos = resJson.cases;

    let handleFilter = document.getElementById('filtro');
    let resultados = Filtrado(handleFilter.value);
    

    draw();


        function Filtrado(Criteria) {
            const filters = {
            'Todos': casos,
            'Abiertos': casos.filter(p => p.closed === false),
            'Cerrados': casos.filter(p => p.closed === true),
            'Edad<50': casos.filter(p => p.age < 50),
            'Edad>50': casos.filter(p => p.age > 50),
            'CirugiasPrev': casos.filter(p => p.prev_surgery === true),
            }
            return filters[Criteria];
        }
        
        handleFilter.addEventListener("change", (element) => {
            resultados = Filtrado(handleFilter.value);
            console.log(resultados);
            draw();
        })

        function draw(){
            function mostrarSaludo() {
                const Info = document.getElementById('Saludo');
                Info.innerHTML="";
                    
                let DisplayInfo = document.createElement('p');
                DisplayInfo.innerHTML = "Hola, " + `<span>${resJson.name}.</span>` + `<br>` + "Estos son tus pendientes del día de hoy:";
                Info.appendChild(DisplayInfo);
        }
        mostrarSaludo();

            function MostrarPacientes() {
                const Info = document.getElementById('Pacientes');
                Info.innerHTML="";
    
                resultados.forEach(element => {
                        
                let mostrarInfo = document.createElement('p');
                mostrarInfo.innerHTML = `<p><b>${element.name} ${element.last_name}</b><br>${element.age} años<br>${element.height} cm<br>${element.bloodtype}<br>${element.country} <br>Fumador: ${element.smoker}<br>Caso cerrado: ${element.closed}<br>Cirugías anteriores: ${element.prev_surgery}</p>`;
                Info.appendChild(mostrarInfo);
                });
                const NumResultados = document.getElementById('NumResultados');
                NumResultados.innerHTML= `<span> ${resultados.length} resultados coinciden con este criterio.</span>`;
            }
        MostrarPacientes();
    
            function mostrarMensajes() {
                const Info = document.getElementById('Mensajes');
                Info.innerHTML="";

                mensajes.forEach(element => {
                    
                let mostrarInfo = document.createElement('p');
                mostrarInfo.innerHTML = `<p><b>${element.sender}</b><br>(${element.timestamp})<br>${element.cc}<br>${element.message}</p>`;
                Info.appendChild(mostrarInfo);
                });
            }
        mostrarMensajes();
        }
    }

    function displayInicio(){
        document.getElementById('Inicio').style.display='block'
        document.getElementById('mostrarPacientes').style.display='none';
        document.getElementById('mostrarMensajes').style.display='none';
    }
    
    function displayPacientes(){
        document.getElementById('Inicio').style.display='none';
        document.getElementById('mostrarPacientes').style.display='block';
        document.getElementById('mostrarMensajes').style.display='none';
    }
    
    function displayMensajes(){
        document.getElementById('Inicio').style.display='none';
        document.getElementById('mostrarPacientes').style.display='none';
        document.getElementById('mostrarMensajes').style.display='block';
    }
    function displayNuevoMensaje(){
        document.getElementById('Inicio').style.display='none';
        document.getElementById('mostrarPacientes').style.display='none';
        document.getElementById('mostrarMensajes').style.display='none';
        document.getElementById('mostrarNuevoMensaje').style.display='block';
    }

    function enviado(){
        Swal.fire(
            'Enviado',
            'El mensaje se ha enviado correctamente',
            'success'
          )
    }

gsap.from('.Saludo', { duration: 1, y: '-100%', ease: 'power2.inOut', delay: 0.2})
gsap.from('.Cards', { duration: 1, y: '-170%', ease: 'power2.inOut', delay: 0.2})
gsap.from('.menu', { duration: 0.8, x: '-650', ease: 'power3.inOut', delay: 0.1})

run();