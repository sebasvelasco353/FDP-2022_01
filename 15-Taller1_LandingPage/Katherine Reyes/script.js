/* header */

let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        enlaces.className = ("enlaces dos")
        contador=1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador=0;
    }
})

/* gsap */

gsap.from('.servicio-cont', {duration:1, x:'-100vw', delay: 0.5 , ease: 'power2.in'})
gsap.from('.titulo-final', {duration:0.3, y: '-100%', opacity:0, delay: 0.5, })
gsap.from('.imagen-about-us', {duration:0.3, y: '-100%', opacity:0, delay: 0.5, })

/* Validación Formulario */

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{

    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado correctamente"
    }
})

