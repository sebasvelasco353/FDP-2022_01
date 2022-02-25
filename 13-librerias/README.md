# Librerias
Una libreria es una serie de funciones y objetos distribuidos en diferentes archivos que importamos en nuestro proyecto para facilitarnos el proceso de desarrollo, Una libreria puede ser grande o peque, esto depende de que tantos archivos tenga y que tantas funciones tenga la libreria.

## Para que las usamos?
Una libreria es util cuando queremos reducir la cantidad de codigo que hacemos, queremos simplificar el codigo, o simplemente queremos tener una forma de guardar codigo que usamos en muchos proyectos.

Como les comentaba hay muchas librerias para muchas cosas, por ejemplo, GSAP es una libreria para manipulacion de propiedades de elementos, React libreria para crear interfaces de usuario, lodash que lo usamos para tener una serie de funciones que nos facilitan tareas comunes usando functional programming.

## Como usamos librerias.
Tenemos varias formas para usar librerias pero en esta clase nosotros vamos a usar un CDN (content delivery network), un CDN es una url desde donde accedemos a contenido que esta en la web, por ejemplo [GSAP](https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js), como pueden ver del link anterior eso nos entrega el JS, entonces al igual que con el JS que nosotros escribimos solo es cuestion de importarlo con un script tag.

## Donde encontrar librerias?
una busqueda en google normalmente es suficiente para que encontremos una libreria que nos ayude con lo que queremos, pero hay un registro que se llama NPM y en [su pagina](https://www.npmjs.com/) encontramos gran numero de librerias para muchas cosas diferentes, algunas con CDN otras no, podemos entonces usar [esta pagina](https://cdnjs.com/) para encontrar el cdn de la libreria que queremos.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
```

## Cosas importantes
- La documentacion va a ser nuestra mejor amiga, ahi vamos a encontrar toda la informacion necesaria para utilizar la libreria que vamos a usar: desde como instalarla hasta como hacer uso de las diferentes funciones.
- Las librerias de codigo abierto (open source) tiene su repositorio publico, hagan uso de eso para revisar los foros, known issues y anuncios de las librerias, esto les ayuda a entender mejor que trae una version x de la libreria, saber si tienes un bug en tu codigo o es un problema de la libreria y conocer mejor la libreria que usas... depronto podes arreglar un issue que estaba abierto y ayudar a la mejora de la comunidad de programacion.
- Cuando van a elegir una libreria recuerden que una comunidad activa es mejor, un proyecto que esta deprecated es un proyecto que no tiene mantenimiento.

## En clase y en casa
Vamos a revisar la documentacion, a ver que cosas tenemos disponibles y familiarizarnos con la estructura de las funciones, esto nos va a ayudar a llegar a escribir el codigo con los pies en la tierra y no estar perdidos.

- [GSAP](https://greensock.com/)
- [D3](https://d3js.org/)
- [p5](https://p5js.org/)