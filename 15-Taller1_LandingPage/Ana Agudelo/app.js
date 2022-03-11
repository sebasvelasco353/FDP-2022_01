TweenMax.from('.logo', 1, {
  delay: 1.2,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom('.menu ul li', 1, {
  delay: 1.2,
  opacity: 0,
  x: -20,
  ease: Power4.easeInOut
}, 0.08)

TweenMax.to('.borde', 1, {
  delay: 1.4,
  width: '100%',
  ease: Expo.easeInOut
})

TweenMax.from('.subtitulo', 1, {
  delay: 2.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.to('.titulo', 1, {
  delay: 2.2,
  width: '100%',
  ease: Expo.easeInOut
})

TweenMax.from('.descripcion', 1, {
  delay: 2.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.to('.img1', 1, {
  delay: 1.2,
  width: '450px',
  ease: Expo.easeInOut
})

TweenMax.to('.img2', 1, {
  delay: 1.2,
  width: '300px',
  ease: Expo.easeInOut
})

TweenMax.to('.img3', 1, {
  delay: 1.2,
  width: '300px',
  ease: Expo.easeInOut
})

TweenMax.to('.uno', 1.5, {
  delay: .2,
  left: '-100%',
  ease: Expo.easeInOut
})

TweenMax.to('.dos', 1.5, {
  delay: .4,
  left: '-100%',
  ease: Expo.easeInOut
})

TweenMax.to('.tres', 1.5, {
  delay: .6,
  left: '-100%',
  ease: Expo.easeInOut
})

//cards

window.onload = function(){

  //Primer Card
    
  masUno = document.querySelector('.masPrimero')
  atrasUno = document.querySelector('.atrasPrimero')

  var tlUno = gsap.timeline({repeat: 2, repeatDelay: 1});
  
  let t1Uno = gsap.timeline({ paused: true, reversed: true });
  let t2Uno = gsap.timeline({ paused: true, reversed: true });

  masUno.addEventListener('click',(e)=>{
  t2Uno.play()
  })

  atrasUno.addEventListener('click',(e)=>{
  t2Uno.reverse()
  })

  t1Uno.play()

  t1Uno.from(".imgPrimero",{
      ease: "elastic.out(1, .8)",
      top:"20%",
      rotate:0,
      duration:1.5})   
      
  t1Uno.from(".tituloPrimero",{
      ease: "elastic.out(1, .8)",
      bottom:"20%",
      rotate:0,
      opacity:0,
      duration:1.5},0.3)
      
  t1Uno.from(".masPrimero",{
      ease: "elastic.out(1, .8)",
      scale:0,
      opacity:0,
      rotate:0,
      duration:1.5},0.4)
              
  t2Uno.to(".imgPrimero",{
      ease: "elastic.out(1, .8)",
      top:"-60%",
      rotate:0,
      duration:2})
          
  t2Uno.to(".tituloPrimero",{
      ease: "elastic.out(1, .8)",
      bottom:"-20%",
      rotate:0,
      opacity:0,
      duration:1.5},0)

  t2Uno.to(".masPrimero i",{
      ease: "elastic.out(1, .8)",
      scale:0,
      opacity:0,
      rotate:0,
      duration:0.5},0)
                               
  t2Uno.to(".masPrimero",{
      ease: "elastic.out(1, .8)",
      scaleY:13,
      scaleX:13,
      rotate:0,
      width:"320px", 
      duration:1.5},0)

  t2Uno.from(".atrasPrimero",{
      ease: "elastic.out(1, .8)",
      top:"-50%",
      opacity:0, 
      duration:1.5},0)


  t2Uno.from(".subtituloPrimero",{
      ease: "elastic.out(1, .8)",
      top:"-80%",
      rotate:0,
      opacity:0,
      duration:1.5},0)

  t2Uno.from(".textoPrimero",{
      ease: "elastic.out(1, .8)",
      top:"-80%",
      rotate:0,
      opacity:0,
      duration:1.5},0)
      
  //Segunda Card
  
  masDos = document.querySelector('.masSegundo')
  atrasDos = document.querySelector('.atrasSegundo')
    
  var tlDos = gsap.timeline({repeat: 2, repeatDelay: 1});
      
  let t1Dos = gsap.timeline({ paused: true, reversed: true });
  let t2Dos = gsap.timeline({ paused: true, reversed: true });
    
  masDos.addEventListener('click',(e)=>{
  t2Dos.play()
  })
    
  atrasDos.addEventListener('click',(e)=>{
  t2Dos.reverse()
  })
    
  t1Dos.play()
     
  t1Dos.from(".imgSegundo",{
      ease: "elastic.out(1, .8)",
      top:"20%",
      rotate:0,
      duration:1.5})   
          
  t1Dos.from(".tiutloSegundo",{
      ease: "elastic.out(1, .8)",
      bottom:"20%",
      rotate:0,
      opacity:0,
      duration:1.5},0.3)
          
  t1Dos.from(".masSegundo",{
      ease: "elastic.out(1, .8)",
      scale:0,
      opacity:0,
      rotate:0,
      duration:1.5},0.4)
                  
  t2Dos.to(".imgSegundo",{
      ease: "elastic.out(1, .8)",
      top:"-60%",
      rotate:0,
      duration:2})
              
  t2Dos.to(".tiutloSegundo",{
      ease: "elastic.out(1, .8)",
      bottom:"-20%",
      rotate:0,
      opacity:0,
      duration:1.5},0)
    
  t2Dos.to(".masSegundo i",{
      ease: "elastic.out(1, .8)",
      scale:0,
      opacity:0,
      rotate:0,
      duration:0.5},0)
                          
                  
  t2Dos.to(".masSegundo",{
      ease: "elastic.out(1, .8)",
      scaleY:13,
      scaleX:13,
      rotate:0,
      width:"320px", 
      duration:1.5},0)
    
  t2Dos.from(".atrasSegundo",{
      ease: "elastic.out(1, .8)",
      top:"-50%",
      opacity:0, 
      duration:1.5},0)
    
    
  t2Dos.from(".subtituloSegundo",{
      ease: "elastic.out(1, .8)",
      top:"-80%",
      rotate:0,
      opacity:0,
      duration:1.5},0)
    
  t2Dos.from(".textoSegundo",{
      ease: "elastic.out(1, .8)",
      top:"-80%",
      rotate:0,
      opacity:0,
      duration:1.5},0)

  //Tercera Card

  masTres = document.querySelector('.masTercero')
  atrasTres = document.querySelector('.atrasTercero')
    
  var tlTres = gsap.timeline({repeat: 2, repeatDelay: 1});
      
  let t1Tres = gsap.timeline({ paused: true, reversed: true });
  let t2Tres = gsap.timeline({ paused: true, reversed: true });
    
  masTres.addEventListener('click',(e)=>{
  t2Tres.play()
  })
    
  atrasTres.addEventListener('click',(e)=>{
  t2Tres.reverse()
  })
    
  t1Tres.play()
    
  t1Tres.from(".imgTercero",{
      ease: "elastic.out(1, .8)",
      top:"20%",
      rotate:0,
      duration:1.5})   
          
  t1Tres.from(".tiutloTercero",{
      ease: "elastic.out(1, .8)",
      bottom:"20%",
      rotate:0,
      opacity:0,
      duration:1.5},0.3)
          
  t1Tres.from(".masTercero",{
      ease: "elastic.out(1, .8)",
      scale:0,
      opacity:0,
      rotate:0,
      duration:1.5},0.4)
                  
  t2Tres.to(".imgTercero",{
      ease: "elastic.out(1, .8)",
      top:"-60%",
      rotate:0,
      duration:2})
              
  t2Tres.to(".tiutloTercero",{
      ease: "elastic.out(1, .8)",
      bottom:"-20%",
      rotate:0,
      opacity:0,
      duration:1.5},0)
    
  t2Tres.to(".masTercero i",{
      ease: "elastic.out(1, .8)",
      scale:0,
      opacity:0,
      rotate:0,
      duration:0.5},0)
                          
                  
  t2Tres.to(".masTercero",{
      ease: "elastic.out(1, .8)",
      scaleY:13,
      scaleX:13,
      rotate:0,
      width:"320px", 
      duration:1.5},0)
    
  t2Tres.from(".atrasTercero",{
      ease: "elastic.out(1, .8)",
      top:"-50%",
      opacity:0, 
      duration:1.5},0)
    
    
  t2Tres.from(".subtituloTercero",{
      ease: "elastic.out(1, .8)",
      top:"-80%",
      rotate:0,
      opacity:0,
      duration:1.5},0)
    
  t2Tres.from(".textoTercero",{
      ease: "elastic.out(1, .8)",
      top:"-80%",
      rotate:0,
      opacity:0,
      duration:1.5},0)
}

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

const handleClick = (e) => { 
  const obj = {
      Nombre: document.getElementById("nombre").value,
      Email: document.getElementById("correo").value,
      Comentario: document.getElementById("comentario").value,
      
  }

  var registroDatos = [];
  
  registroDatos.push(obj);

  alert('Tu mensaje fue enviado satisfactoriamente')
}