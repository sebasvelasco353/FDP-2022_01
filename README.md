Bienvenidos y bienvenidas al [**repositorio**]() para la clase de Fundamentos de Programacion, semestre 01 de 2022.

## Tabla de contenidos.

- [Tabla de contenidos.](#tabla-de-contenidos)
- [Intro.](#intro)
- [Reglas de la clase.](#reglas-de-la-clase)
- [Razones para este repositorio](#razones-para-este-repositorio)
- [Algunos comandos de git](#algunos-comandos-de-git)
  - [clone](#clone)
  - [add](#add)
  - [Commit](#commit)
- [Vocabulario de la clase](#vocabulario-de-la-clase)
  - [Web](#web)
  - [Git](#git)
  - [Javascript](#javascript)
- [Lecturas de interes.](#lecturas-de-interes)
- [Videos recomendados.](#videos-recomendados)
- [FAQ](#faq)

## Intro.
El registro de la materia, ejercicios propuestos, links utiles y demas datos que nos van a ser utiles los pueden encontrar en este [**Repositorio**.]()

Los invito a que le hagan un [**fork**](https://docs.github.com/en/get-started/quickstart/fork-a-repo) a este repo, lo [**clonen**]() y antes de las clases hagan [**pull**]() para revisar el nuevo contenido, haciendo uso de este [**Repositorio**]() uds podran llegar a la clase con una idea de que vamos a ver, encontrar algunos ejemplos relacionados con la clase y mas informacion que les permitira entender mas facil y ser cada vez mejores desarrolladores y desarrolladoras.

La idea de este ejercicio es que uds tengan un lugar donde visitar para recordar, practicar y aprender cosas durante y despues del semestre, sientanse libres de abrir [**pull requests**]() con contenido que les parece interesante o agregar preguntas a la seccion de Discussions para que todas las personas que tengan este [**repositorio**]() puedan ver la respuesta.

 _muchas veces tenemos las mismas dudas y viene bien preguntar en publico (sin pena que todos estamos aprendiendo)_.

**_NOTA:_** La seccion de FAQ se actualizara con las preguntas mas frecuentes que encontremos durante el semestre como una forma mas sencilla de encontrar respuestas.

## Reglas de la clase.
Si queremos una clase amena y donde se logre el objetivo (aprender), necesitamos tener algunas reglas que nos permitan estar todos en el mismo lugar.

- no interrumpir de forma innecesaria (no veamos tiktos, reels, etc a todo volumen en la clase).
- hagamos las preguntas que tengamos, **Toda pregunta es valida**.
- Entreguemos el trabajo a tiempo.
- Seamos proactivos.
- Practiquemos lo que aprendemos.

## Razones para este [repositorio]()
La idea es que uds puedan acceder a este repo desde el dia 1 de clase y lo utilicen como una guia detallada de las cosas que vamos a ver durante todo el semestre, en mi vida laboral me he dado cuenta que me ayuda mucho tener un lugar donde tomo notas y escribo ideas de cosas que quiero hacer o aprender, este [**repositorio**]() es una herramienta para eso, para que [con la ayuda de todos](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) escribamos lo que hacemos en cada clase y tengamos una ayuda mas a la hora de cumplir nuestros objetivos de la materia.

## Algunos comandos de [git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Fundamentos-de-Git)
Aqui guardaremos los comandos que nos van a ser utiles en esta clase y el futuro.
### clone
Lo usamos para clonar el repositorio objetivo en nuestra maquina.
```
git clone [URL del repositorio]
```
### add
Lo usamos para decir que archivos queremos que hagan parte de nuestro [commit](https://www.w3schools.com/git/git_commit.asp?remote=gitlab), a este comando le tenemos que entregar los archivos que vamos a agregar, si queremos todos los de la carpeta en la que estamos usamos un punto.
```
git add [los archivos que queremos agregar] o git add .
```
### Commit
Un commit es un snapshot de nuestro codigo en el tiempo, cada commit debe tener un mensaje que diga que en que avanzamos o que cambiamos del codigo para en un futuro poder encontrarlos mas facilmente.
```
git commit -m "[Mensaje que quiero dejar en el commit]"
```
### push
push es pa subir los cambios en el commit a el servidor
```
git push
```
### moverme entre branches
```
git checkout <branch>
```
### crear una nueva branch
```
git checkout -b "<branch>"
```
### Ver los remotos de mi repo
```
git remote -v
```
### Agregar un nuevo remoto
```
git remote add <nombre_del_remoto> <url_del_remoto>
```
### Preguntar si hay cambios
```
git fetch <nombre_del_remoto>
```
### mezclar los cambios con tu codigo
```
git merge <nombre_del_remoto>/<branch>
```


## Vocabulario de la clase
### Web
- [**Web Semantica**](https://www.crehana.com/cl/blog/desarrollo-web/web-semantica/): Es un concepto en desarrollo web que promueve el uso de metadata y tags en nuestro codigo que ayude a entender mejor el contenido de la pagina o aplicacion web que esta siendo visitada en nuestro navegador.
- [**Responsive Web**](https://www.w3schools.com/whatis/whatis_responsive.asp): Hace referencia a crear paginas y aplicaciones que se acomoden a el dispositivo en el cual estan visitandolas, esto se consigue reorganizando el contenido y cambiando algunas propiedades visuales que ayudan a que el usuario pueda navegar y tener acceso a la informacion que busca mas facil.
- [**Web Accesible**](https://developer.mozilla.org/es/docs/Learn/Accessibility/What_is_accessibility): Es crear paginas y aplicaciones que brinden las facilidades necesarias para que usuarios con necesidades diferentes puedan **acceder** e **interactuar** con lo que desarrollamos, esto se logra de diferentes formas como por ejemplo el uso correcto de tags.
### Git
- [**Git**](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Fundamentos-de-Git): Git es un programa que se encarga de guardar archivos que corresponden a momentos en la historia de nuestro proyecto, es decir para controlar las versiones y el flujo del desarrollo de un proyecto de desarrollo, cada uno de esos momentos se llama [commit](https://www.w3schools.com/git/git_commit.asp?remote=gitlab).
- [**Repositorio**](): Basicamente es nuestro proyecto, puede ser local o estar en un servidor y es usado por los controladores de versiones para guardar ahi los estados de nuestro proyecto.
- [**Fork**](https://www.toolsqa.com/git/git-fork/): Es una copia de un repositorio, esto es usado para para experimentar ya hacer multiples cambios en el proyecto sin afectar el repositorio original, esto para trabajar en colaboracion con mas personas o tomar repositorios como base de otro proyecto.

  [aqui](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) pueden encontrar informacion mas detallada sobre el proceso de contribuir a un proyecto mediante Pull Requests.
- [**Branch**](): branch = rama, es una bifurcacion del codigo en donde trabajamos de forma aislada de las otras, normalmente lo utilizamos para nuevas funcionalidades, proof of concept o bug fixes.
- [**Commit**](https://www.w3schools.com/git/git_commit.asp?remote=gitlab): Es un snapshot del codigo en ese momento, los utilizamos para guardar nuestros cambios en el codigo del proyecto.
- [**Clonar**](): hacer una copia local dle proyecto en tu computador, esto no solo nos trae los archivos y carpetas sino tambien lo relacionado con git.
- [**Pull**](): Es "jalar" codigo remoto a tu local.
- [**Pull Request**](): Solicitar a alguien que haga pull de tus cambios a su codigo.
### Javascript
- [**Hoisting**](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting): cuando un interpreter mueve la declaracion de variables, funciones o clases al inicio de su scope.
- [**scope**](https://www.w3schools.com/js/js_scope.asp): nos determina donde podemos acceder a variables.
- [**Concatenar**](https://en.wikipedia.org/wiki/Concatenation): unir caracteres.


## Paginas recomendadas.
[**W3 Schools**](https://www.w3schools.com/), [**FreeCodeCamp**](https://www.freecodecamp.org/), [**CodePen**](https://codepen.io/), [**StackOverflow**](https://codepen.io/), [**Git**](https://git-scm.com/)

## Canales de Youtube recomendados.
[**Hola Mundo**](https://www.youtube.com/channel/UC4FHiPgS1KXkUMx3dxBUtPg), [**Traversy Media**](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA), [**FreeCodeCamp**](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ), [**Web Dev Simplified**](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw), [**Kevin Powell**](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw), [**Fireship**](https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA), [**Academind**](https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w), [**The Net Ninja**](https://www.youtube.com/c/TheNetNinja)

## Keyboard Shortcuts en Vscode
- **Buscar archivos:** cmd+p o ctrl+p
- **Comandos:** cmd+shift+p o ctrl+shift+p
- **Mover una linea de codigo:** alt+FlechaDireccion
- **copiar una linea de codigo en otro renglon:** alt+shift+flechaDireccion
- **cursor multiple:** alt+click
- **Seleccionar similares:** con el texto seleccionado cmd+d o ctrl+d