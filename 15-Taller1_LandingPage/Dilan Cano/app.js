TweenMax.from('.logo', 1, {
  delay: 1.2,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

gsap.from(".menu ul li", .4, {
  x: 500,
  scale: .4,
  stagger: .5,
  delay: 1,
  opacity: 0,
  ease: "expo.out"
})


gsap.from(".subtitulo", .4, {
  x: 500,
  scale: .2,
  opacity: 0,
})

gsap.from(".titulo", .4, {
  x: -500,
  scale: .4,
  stagger: .5,
  delay: 1,
  opacity: 0,
  ease: "elastic.out(1, 0.3)"
})

gsap.from(".descripcion", 2, {
  x: 500,
  scale: .2,
  opacity: 0,
})

TweenMax.to('.img1', .1, {
  delay: 1,
  width: '500px',
  ease: Expo.easeInOut
})

//cards

gsap.from('#CardTitulo', {
   duration: 1.5,
   y:'-10%',
   opacity: '0',
   stagger: 0.3,
   scrollTrigger:'#CardTitulo'})

gsap.from('.card', {
  duration: 1.5,
  y: '-20%',
  ease: 'power4.out',
  stagger:0.3,
  opacity:0,
  scrollTrigger:'#Card'})


//Formulario

gsap.from(".tituloContacto", 1.5, {
  scale: .5,
  opacity: 0,
  ease: "expo.out"
})

gsap.from(".descripcionContacto", 2.5, {
  scale: .5,
  opacity: 0,
  delay: .7,
  ease: "elastic.out(1, 0.3)"
})

gsap.from(".inputContacto", .4, {
  x: 500,
  scale: .4,
  stagger: .5,
  delay: 1,
  opacity: 0,
  ease: "expo.out"
})

gsap.from(".icono_division", .4, {
  x: -500,
  scale: .4,
  stagger: .5,
  delay: 1,
  opacity: 0,
  ease: "elastic.out(1, 0.3)"
})

gsap.from(".subtituloContacto", .4, {
  x: 500,
  scale: .2,
  opacity: 0,
})


const EnviarDatos = (e) => { 
  const obj = {
      Nombre: document.getElementById("nombre").value,
      Email: document.getElementById("correo").value,
      Comentario: document.getElementById("comentario").value,
      
  }

  var registroDatos = [];
  
  registroDatos.push(obj);

  alert('Tu mensaje fue enviado satisfactoriamente')
}