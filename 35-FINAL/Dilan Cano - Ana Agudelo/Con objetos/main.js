let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});

class Pelicula {
    constructor(title, poster) {
        this.title = title
        this.poster = poster

    }
    
    drawPelicula() {
		return `
        <div class="pelicula">
        <img class="poster" src="https://image.tmdb.org/t/p/w500/${this.poster}">
        <h3 class="titulo">${this.title}</h3></div>
        `;
    }
}
const contenedor = document.getElementById("contenedor");

const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
	
		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();

        datos.results.forEach(element => {
            const cadaPelicula = new Pelicula(element.title, element.poster_path);
            const el = document.createElement('div');
            el.innerHTML = cadaPelicula.drawPelicula();
            contenedor.appendChild (el);
        });

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();