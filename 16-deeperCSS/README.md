## Variables en CSS, helper classes y Layouts responsive.
### Variables en CSS
Al igual que en javascript, las variables aca nos van a ayudar a guardar cosas en la memoria, en este caso serian valores que vamos a utilizar para darle los estilos a nuestro front, por ejemplo colores, tamanos, estilos de fuente y mcuhas mas cosas.

usamos las variables para mantener nuestro diseno consistente y para agilizar posibles modificaciones que tengamos que hacer a futuro, es mucho mas facil que cambiemos el valor de la variable azul que buscar en toda nuestra pagina o aplicacion en donde aparece el color y reemplazarlo X veces.

para crear una variable debemos declararlas y darle un valor en el elemento :root y poniendo -- antes del nombre de la siguiente manera:

```css
:root {
    /* Colores */
    --azul: #0080ff;
    --gris: #808080;

    /* Medidas */
    --header_height: 5rem;
    --header_padding: 1rem 2rem;
}
```
para usar esas variables debemos usar el metodo var() y entregarle la variable que queremos utilizar de la siguiente manera:

```css
header {
    color: var(--azul);
    height: var(--header_height);
    background-color: var(--gris);
    padding: var(--header_padding);
}
```

### Helper Classes
Las helper clases son clases de css que creamos para ayudarnos a dar algunas propiedades comunes de muchos elementos, por ejemplo, si yo se que voy a utilizar mucho las propiedades de display: flex y flex-direction: row, podria crear una helper class que se llame flex-row y asi cuando necesito poner esas propiedades a un elemento cualquiera solo necesito agregarle esa clase.

```css
.flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
```
```html
<div class="clase-cualquiera flex-row">
    Este elemento tendra las propiedades de flex-row
</div>
<div class="otro-elemento flex-row">
    Este elemento tambien tendra las propiedades de flex-row,
    pero solo escribi esos estilos una vez
</div>
```

### Responsive Layouts
Como ya lo saben, un layout responsive es aquel que se acomoda a los diferentes tamanos de pantalla que tengamos disponibles, pueden ser cambios minimos como solo el tamano de letra o pueden ser cambios grandes como verse totalmente diferente a como se ve en una pantalla mas grande.

Para poder definir cuales estilos se deben usar en que pantallas debemos usar Media Queries, una forma de dar condiciones en css:

```css
h1 {
    font-size: 4rem;
}
@media only screen and (max-width: 768px) {
  /* lo que va a verse en pantallas de maximo 768px */
  h1 {
      font-size: 1.5rem;
  }
}
@media only screen and (min-width: 1280px) {
  /* lo que va a verse en pantallas de minimo 10280px */
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
```