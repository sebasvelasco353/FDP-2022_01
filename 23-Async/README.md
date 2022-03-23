## Async Functions
Async functions o funciones asincronas son funciones que utilizamos para ejecutar codigo en el fondo, es decir como el codigo en javascript se ejecuta de forma sincrona, usamos las funciones async para esperar una respuesta y continuar con ese proceso despues, las declaramos con la palabra async antes de function y usamos el await dentro de ellas para decirle a la funcion que debe esperar esa respuesta.

## Promesas
Son objetos que representan una respuesta, esta puede ser el resultado de una operacion asincrona o un error.

```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});
```

las promesas tienen tres posibles estados:
- pending o pendientes, es su estado inicial.
- fulfilled o completada satisfactoriamente.
- rejected o rechazada, que nos indica un error en la funcion.

cuando llamamos una promesa usamos el metodo then para hacer algo con esa respuesta o para encargarnos del error, esto puede a su vez devolvernos una promesa y a esa podemos tambien encadenarle un then.

```js
promesa
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
```

estas son muy utiles cuando estamos usando datos que vienen desde un servidor, cuando tenemos que esperar el resultado de una busqueda en cache, incluso para guarrdar datos en archivos de texto y muchas otras cosas, es importante que sepamos bien como usarlo en conjunto con async y await.