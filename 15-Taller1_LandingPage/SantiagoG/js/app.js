gsap.registerPlugin(ScrollTrigger);

gsap.from(".header", {
    y: '-100%',
    duration: 1.5,
})

gsap.from(".LogoHeader", {
    y: '-15%',
    duration: 2,
    delay: 1
})

gsap.from(".DivNav", {
    y:'-100%',
    duration: 1.5,
    ease: 'power3.inOut'
})

gsap.from(".DivBienvenida", {
    y: '-15%',
    duration: 2,
    delay: 1,
    scrollTrigger: ".DivBienvenida"
})

gsap.from(".SomosQ", {
    y: '-15%',
    duration: 2,
    delay: 1,
    scrollTrigger: ".SomosQ"
})

gsap.from(".Productos", {
    y: '-15%',
    duration: 2,
    delay: 1,
    scrollTrigger: ".Productos"
})

gsap.from(".Contacto", {
    y: '-15%',
    duration: 2,
    delay: 1,
    scrollTrigger: ".Contacto"
})

function FeedBack(){
    if (InputNombre.value===''|| InputTelefono.value==='' || InputEmail.value==='' || InputMensaje.value===''){
        alert('Digite correctamente los datos obligatorios');
    }else{
        alert('Sus datos fueron enviados :D');
    }}

function Enviar() {
    var Nombre = document.getElementById("InputNombre").value;
    var Teléfono = document.getElementById("InputTelefono").value;
    var Email = document.getElementById("InputEmail").value;
    var Mensaje = document.getElementById("InputMensaje").value;
    {
        console.log("Nombre: " + Nombre);
        console.log("Email: " + Email);
        console.log("Teléfono: " + Teléfono);
        console.log("Mensaje: " + Mensaje);

        
    }
return;}