# Profundizacion Clases y objetos
como lo vimos enotras clases los objetos representan algo con parametros y funciones, representado con key value pairs
```javascript
const obj = {
    key: value
}
```
Tambien aprendimos que cuando creamos una clase tambien tenemos que ponerle un contructor, un metodo que se encarga de setear algunos parametros que entregamos al instaciar el objeto

```javascript
class Persona {
    constructor(name, height, age) {
        this.name = name;
        this.height = height;
        this.age = age;
    }
    breathe() {
        // im breathing.
    }
}
```

Pero, que esta pasando para que yo pueda usar eso y cual es la razon para tener otros metodos "predefinidos" en mis objetos, por ejemplo .toString, .map?

Bueno, pues eso que nos agrega los metodos y la razon por la que los objetos son como son es algo llamado [object prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes), este basicamente es un mapa general de que contienen los objetos de x o y clase, para entender esto mejor vamos a revisar todo por partes.

## Herencia.
Al igual que nosotros heredamos cosas como algunas actitudes, la estatura, el color de ojos, pelo, piel y muchas otras cosas de nuestros padres, las clases pueden ser hijas de otras y heredar propiedades y metodos para usarlas.

```javascript
class Carro {
  constructor(doors, seats, engineCC, automatic) {
    this.doors = doors;
    this.seats = seats;
    this.engineCC = engineCC;
    this.automatic = automatic;
  }
    drive() {
        console.log("im driving");
    }
    break() {
        console.log("stepping on the breaks")
    }
}

class Audi extends Car {
    constructor(doors, seats, engineCC, automatic, model) {
    // usamos super() para indicar que vamos a usar el constructor de la clase padre
    super(doors, seats, engineCC, automatic);
    this.model = model;
  }
  drift() {
    return `${this.break()} and moving the wheel on my ${this.engineCC} cc Audi${this.model}`;
  }
}

let driftCar = new Audi("2", "5", 1400, true, 'A1 TFSI');
```
En este ejemplo extendemos la clase Car cuando creamos la clase Audi, con esto decimos que Audi es hijo de Car y heredamos todas sus propiedades y metodos.

En el constructor usamos el metodo super para decir que le entregamos las propiedades necesarias a la clase padre cuando estemos instanciando el objeto, y como pueden ver, podemoshacer referencia a propiedades y metodos usando this como lo hariamos normalmente.

## Object Prototype
el prototype de un objeto es, basicamente, la estructura de ese objeto, aqui podemos encontrar las propiedades y metodos de un objeto de cualquier tipo (excepto null, este no tiene prototype), es una propiedad global que podemos usar para agregar propiedades y metodos a cualquier objeto pero es recomendable solo suarlo en objetos que hayamos creado nosotros.

```javascript
object.prototype.name = value
```