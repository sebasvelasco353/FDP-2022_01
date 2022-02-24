'use strict'

const bloque = document.querySelectorAll('.bloque')
const h2     =document.querySelectorAll('.h2')


// Cuando damos CLICK en h2,
    // QUITAR la clase activo de TODOS los bloques
    //Vamos a añadir la clase activo al BLOQUE con la POSICIÓN DEL h2

h2.forEach( (cadaH2 , i )=>{
    h2[i].addEventListener ('click', ()=>{

        bloque.forEach ( (cadaBloque , i )=>{
           bloque[i].classList.remove('activo') 
        })
        bloque[i].classList.add('activo')
    })
})