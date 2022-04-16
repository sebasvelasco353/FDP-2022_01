// esto es un comentario de una linea
/* Este
Es
Uno
De
Varias
Lineas
*/

console.log('Debug en la consola');

// variables
let numeroDeEstudiantes = 24; // Esta es una variable que definimos usando let (local)
let horaLLegada; // declaro la variable

// pasan cosas

horaLLegada = 0700; //inicializo la variable

var vecesEnOroEnDota = 0 // Esta es una variable que definimos usando var (global)
const MAXIMO_PERMITIDO = 10; // es una constante, nunca vamos a cambiar su valor.

// data types
var textoRandom = 'Soy un texto random';
var canJump = false;
var PI = 3.14;
var carrosDisponibles = ['BMW x1', 'Renault 5 turbo', 'Mitsubishi Lancer Evo'];
var profeProgra = {
    nombre: 'Sebastian Velasco',
    edad: 30,
    lenguajes: ['Espanol', 'Ingles', 'Portugues'],
    eat: function (){
        console.log('nom nom nom, good soup')
    }
}
var noExisto = null;
var noSeQueSoy = undefined;

// condicionales
if (canJump !== true) {
    console.log('i can jump!');
}

if ((profeProgra.edad >= 18) && profeProgra.lenguajes.length > 3 ) {
    console.log('Tengo Cedula');
} else if (profeProgra.edad <= 40 && profeProgra.edad < 18) {
	console.log('tngo canas');
} else {
    console.log('No tengo Cedula');
}

canJump ? console.log('i can jump!') : null;

switch (carrosDisponibles) {
    case 0:
        console.log('voy en bici');
        break;
    case 1:
        console.log('voy en bici o en el carro');
        break;
    case 2:
        console.log('voy en bici o en uno de los dos carros');
        break;
    case 3:
        console.log('voy en uno de los 3 carros');
        break;
    default:
        console.log('voy en bici');
        break;
}


// let vs var
const EXAMPLE_FUNCTION = () => { //creamos una funcion (arrow function)
    // Todo lo que va entre las llaves de esta funcion es un bloque de codigo.
    var variableVar = 'soy Var';
    let variableLet = 'soy Let';

    console.log('variable Var: ', variableVar);
    console.log('variable Let: ', variableLet);

    {
        var variableVarInner = 'soy inner var';
        let variableLetInner = 'soy inner let';

        console.log('variable Var inner: ',variableVarInner);
        console.log('variable Let inner: ',variableLetInner);
    }
    console.log('variable Var inner desde afuera: ',variableVarInner);
//    console.log('variable let inner desde afuera: ',variableLetInner);
}
EXAMPLE_FUNCTION(); //llamamos o ejecutamos la funcion




function sumar(x, y) {
	// contenido
	return x + y;
}


const sumar2 = (x, y) => {
	//contenido
	console.log('estoy por aca!')
	return x + y;
}

function alertarEstudiantes() {
	alert('Estudiantes!');
}


var var1 = 3;
var estaEsLaVariable = 1;

console.log(sumar2(3, 6));


alertarEstudiantes();




















