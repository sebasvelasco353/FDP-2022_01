TweenMax.to('.izquierdo', 2, {
  delay: .8,
  width: '50%',
  ease: Power2.easeInOut
})

TweenMax.to('.derecho', 2, {
  delay: .6,
  width: '50%',
  ease: Power3.easeInOut
})

TweenMax.from('.nav', 2, {
  delay: .8,
  opacity: 0,
  ease: Expo.easeInOut
})

TweenMax.from('.texto h1', 2, {
  delay: .6,
  x: 1000,
  ease: Circ.easeInOut
})

TweenMax.from('.texto p', 2, {
  delay: .7,
  x: 1000,
  ease: Circ.easeInOut
})

TweenMax.to('.img-contenido', 2, {
  delay: 1.5,
  width: '800px',
  ease: Power2.easeInOut
})

TweenMax.staggerFrom('.navegacion ul li', 2, {
  delay: 1,
  x: 1000,
  ease: Circ.easeInOut
}, 0.08)

TweenMax.from('.infor', 2, {
  delay: 1.5,
  y: 100,
  ease: Circ.easeInOut
})

//cards

gsap.from(".individual", .4, {
  x: -500,
  scale: .4,
  stagger: .5,
  delay: 1,
  opacity: 0,
  ease: "elastic.out(1, 0.3)"
})

//Formulario


gsap.from('#Formulario', {
  duration: 1.5,
  x:'10%',
  opacity: '0',
  stagger:0.3,
  scrollTrigger:'.Formulario'})


  const enviarDatos = (e) => { 
    const obj = {
        Nombre: document.getElementById("Nombre").value,
        Email: document.getElementById("Correo").value,
        Comentario: document.getElementById("Mensaje").value,
        
    }
  
    var registroDatos = [];
    
    registroDatos.push(obj);
  
    alert('Tu mensaje fue enviado satisfactoriamente')
  }

