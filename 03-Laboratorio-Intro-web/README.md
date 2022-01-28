## Etiquetas Multimedia.
como vimos en la clase pasada, existen gran cantidad de etiquetas y cada una tiene su uso: texto, estructura, accessibility, y mucho mas, en esta clase vamos a ver algunas etiquetas que usamos para agregar contenido multimedia a nuestra pagina:

### Video
Cuando queremos agregar un video a nuestra pagina usamos el siguiente tag y sus propiedades.

``` html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

a este tag podemos pasarle diferentes propiedades como por ejemplo **controls**, este define si el video tiene o no visibles los controles de play / pause / stop, podemos tambien darle otras propiedades como por ejemplo **autoplay** que como su nombre lo indica se encarga de reproducir el video cuando la pagina termina de cargar, **loop**, **muted**, **poster** que define una imagen para mostrar mientras el video esta cargando.

adentro de este tag tenemos los de source, estos son los que usamos para especificar los diferentes archivos o links donde tenemos el video que queremos reproducir, el navegador elegira el primero que encuentre y sea compatible.

### Imagenes
Para agregar imagenes a nuestra pagina usamos el siguiente tag

```html
<img src="img.jpg" alt="example img tag" width="500" height="600">

```
El tag img no solamente nos permite agregar una imagen (local o por url) a la pagina sino tambien darle las siguientes propiedades: **alt** es el texto alternativo para mostrar cuando la imagen esta cargando o no pudo ser cargada, la idea es que este texto de una breve descripcion de lo que muestra la imagen, **src** es el link al archivo de la imagen que queremos mostrar en nuestra pagina, **loading** le dice al navegador si debe cargar la imagen apenas empieza a cargar la pagina o si hace un lazy loading.

### Audio
Si queremos que nuestra pagina tenga elementos de audio usamos el siguiente tag

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

Al igual que la etiqueta de video, en esta encontramos que tenemos la posibilidad de usar **controls** y debemos especificarle los archivos que tenemos disponibles para reproducirlo, tenemos las mismas propiedades disponibles que en la etiqueta de video.

## Forms
Usamos forms cuando queremos capturar datos o input interactuando con un usuario para despues usar esa informacion, procesarla o enviarla a nuestro servidor para agregarla a una base de datos.

```html
<form>
aqui agregamos los elementos que hacen parte de nuestro form.
</form>
```

### Input
Lo utilizamos para crear un campo en el cual el usuario podra agregar informacion o seleccionar una opcion entre las disponibles, el tag de input siempre debe llevar una propiedad **name** la cual dice a que corresponde, por ejemplo si en este ejemplo ese input es para agregar un postre el name podria ser nombrePostre, la idea es que ese name nos indique que va a agregar el usuario.

Tambien tenemos el tag **label** que usamos para decir a que corresponde ese elemento cuando lo lea un ScreenReader y asi mejoramos la accesibilidad de nuestra pagina.

```html
<!-- Form con input text -->
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>

<!-- Form con input radio buttons -->
<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>

<!-- Form con Checkboxes -->
<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>
```

Ademas de esos inputs tambien tenemos el boton que se va a encargar de enviar los datos obtenidos de los inputs con un nombre definido hacia donde le digamos en el atributo action del form, el boton lo agregamos con el siguiente tag

```html
<form action="/action_page.php"> <--- accion que va a ejecutar
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit"> <--- Boton
</form>
```

## El DOM.
DOM significa Document Object Model, este modelo define los elementos del HTML, las propiedades de esos elementos, metodos usados y necesarios, y los eventos que seran usados en la pagina.

![Imagen obtenida de https://www.w3schools.com/whatis/whatis_htmldom.asp](https://www.w3schools.com/whatis/img_htmltree.gif "Example DOM Tree")

Cuando la pagina carga el navegador crea un arbol de objetos que representan los diferentes elementos de nuestra pagina, estoy pueden ser usados, modificados y eliminados desde JS, para acceder a estos elementos podemos buscarlos por su clase o su id, esto lo veremos mas en detalle en otras clases.



