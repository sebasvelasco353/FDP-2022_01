// join(): lo usamos para juntar todo el arreglo en un string, podemos especificar el separador.
const DEMO_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(`DEMO_ARRAY.join: "${DEMO_ARRAY.join('=>')}"`);
// pop(): borra el ultimo elemento de un arreglo
DEMO_ARRAY.pop();
console.log(`DEMO_ARRAY.pop(): ${DEMO_ARRAY}`);
// push(): agrega un elemento al final del arreglo
DEMO_ARRAY.push('z');
console.log(`DEMO_ARRAY.push('z'): ${DEMO_ARRAY}`)
// Cuando queremos obtener datos del array podemos decirle la posicion del elemento
console.log(`DEMO_ARRAY[3]: ${DEMO_ARRAY[3]}`);
// Para conocer el largo de un arreglo usamos length
console.log(`DEMO_ARRAY.length: ${DEMO_ARRAY.length}`);
// cuando quiero dividir un arreglo en dos utilizo slice
var slicedArray = DEMO_ARRAY.slice(3);
console.log(`DEMO_ARRAY: ${DEMO_ARRAY}, slicedArray: ${slicedArray}`);
// para recorrerlos podemos usar forEach
console.log('EJEMPLO FOR EACH');
DEMO_ARRAY.forEach(element => {
    console.log(`--- ${element} --- `);
});
// podemos crear un nuevo arreglo haciendo operaciones en cada elemento
console.log('EJEMPLO MAP');
var modifiedArray = DEMO_ARRAY.map(e => {
    return `<-${e}->`
});
console.log(`${modifiedArray}`);
// filtramos
console.log('EJEMPLO FILTER');
var pares = DEMO_ARRAY.filter(e => {
    return e%2 === 0;
});
console.log(`pares: ${pares}`);
// podemos conocer el index de un elemento usando indexOf, nos retorna el indice o -1 si no encuentra el elemento
console.log(`index de 4: ${DEMO_ARRAY.indexOf(4)}`);
console.log(`index de 40: ${DEMO_ARRAY.indexOf(40)} <-- no existe en el array`);