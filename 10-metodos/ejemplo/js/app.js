/*
*
*                                               ▄▄
* ▀████▄     ▄███▀         ██                 ▀███
*   ████    ████           ██                   ██
*   █ ██   ▄█ ██   ▄▄█▀████████  ▄██▀██▄   ▄█▀▀███   ▄██▀██▄ ▄██▀███
*   █  ██  █▀ ██  ▄█▀   ██ ██   ██▀   ▀██▄██    ██  ██▀   ▀████   ▀▀
*   █  ██▄█▀  ██  ██▀▀▀▀▀▀ ██   ██     █████    ██  ██     ██▀█████▄
*   █  ▀██▀   ██  ██▄    ▄ ██   ██▄   ▄██▀██    ██  ██▄   ▄███▄   ██
* ▄███▄ ▀▀  ▄████▄ ▀█████▀ ▀████ ▀█████▀  ▀████▀███▄ ▀█████▀ ██████▀
*
* ------- Profundizacion en Metodos: como y cuando usarlos. -------
*
* En esta clase vamos a ver un poco mas de como hacer, donde hacerlos y pq son importantes los metodos cuando estamos
* escribiendo codigo.
*
* La palabra clave es Reutilizable, la idea de hacer metodos es crear bloques de codigo que podemos utilizar en diferentes partes de
* nuestra aplicacion, hasta ahora hemos creado algunos para, por ejemplo, obtener el valor de diferentes cosas al hacer click a un boton,
* pero los metodos o funciones son utiles en muchos otros casos.
*
*
* Son bloques de codigo que escribimos para cumplir con una funcion especifica, puede ser por ejemplo obtener el valor de inputs al dar click a un boton
* o podria tambien ser una funcion que redondea numeros con decimales y los vuelve numeros enteros.
*
* Cualquier accion que se repite mucho en nuestro codigo puede ser abstraida en una funcion: movimientos, normalizacion de datos, creacion de elementos, etc.
* Hay funciones que vienen incluidas en algunos datatypes u objetos, como por ejemplo getElementById es una funcion que hace parte del objeto document con
* el que hemos venido trabajando hasta ahora, la foma en que invocamos una funcion que hace parte de un objeto o elemento es usando un punto despues del
* elemento al que le pertenece a funcion.
*
* elemento.funcion()
*
* existen dos formas de escribir una funcion: Arrow functions y con la palabra 'function', estas pueden recibir parametros con datos que van a ser
* usados dentro de la funcion y que nos permiten procesar datos que estan afuera.
*
* Tambien podemos retornar valores desde nuestra funcion usando a palabra clave return, lo que esto hace es devolver como respuesta de la funcion
* lo que sea que tengamos frente al return y terminar la ejecucion de la funcion.
*
*/

const ejemploArrow = () => { // Arrow function
    console.log('Soy una arrow function');
}
function ejemploKeyword() { // usando una restricted keyword
    console.log('Soy una funcion con keyword');
}
const sumarDatos = (paramA, paramB) => { // Definir arrow function con parametros
    return paramA + paramB;
}
ejemploArrow();
ejemploKeyword();
const resultado = sumarDatos(23, 55); // invocar una funcion con parametros
/*
*
* pensemos que las funciones nos van a ayudar a mantener el orden y a hacer codigo mas eficiente, si tenemos una tarea grande, por ejemplo mostrar en pantalla
* una informacion que recibimos desde algun lado y tener un boton de refresh, lo ideal es crear funciones que se encarguen de las diferentes subtareas
* tareas que puedan ser usadas en diferentes momentos.
*
*/
const pedirInfo = () => {
    // codigo para pedir la informacion.
}
const renderElements = () => {
    // codigo para renderizar
}
/*
*
* Ahora tenemos una funcion para cada tarea, podemos usarlos por ejemplo al cargar la pagina y cuando le den click al boton
*
*/
handleBtnCick = () => {
    pedirInfo();
    renderElements();
}
/*
*
* Las variables que declaramos dentro de una funcion pasan automaticamente a ser locales
*
*/
function variableLocal() {
    let numero = 1; // Esta variable solo puede usarse dentro de esta funcion
}
console.log(numero); // Nos da un error (numero no existe)
