let url = "https://rickandmortyapi.com/api/";
let html = document.querySelector(".main-container");

let arrayper = [];

// Genera un array y toma los primeros 6 números, son aleatorios entre 1 y 826
// que es el total de personajes existentes para que no me muestre más solo 6.
for (let i = 0; i < 6; i++) {
  arrayper.push(Math.floor(Math.random() * (826 - 1) + 1));
}

// Función para obtener el nombre de un episodio a partir de su URL
let getEpisodeName = (episodeUrl) => {
  return fetch(episodeUrl)
    .then((res) => res.json())
    .then((episodeData) => {
      return episodeData.name; //Aqui me recupera y me retorna el nombre del episodio
    });
};

// Función principal para obtener datos de personajes y episodios
let getDatos = (apiURL) => {
  return fetch(`${apiURL}character/${arrayper}`)
    .then((res) => res.json())
    .then(async (response) => {
      // Utiliza Promise.all para hacer solicitudes concurrentes a la API de episodios
      const tpt = await Promise.all(
        response.map(async (character) => {
          // Obtiene el nombre del episodio utilizando la función anterior
          const episodeName = await getEpisodeName(character.episode[0]);
          // Construye el HTML para cada personaje con su respectivo episodio
          return `<div class="sub-box">
                        <img src="${character.image}" id="img" alt="">
                        <div class="text-container">
                            <div class="name-character">
                            <a href="#"><strong>${character.name}</strong></a>
                            </div>
                            <div class="status-character">
                                <div class="circle-status"></div>
                                <p class="data-status-species">${character.status} - ${character.species}</p>
                            </div>
                            <p class="location-character">Last known location:</p>
                            <div class="nameLocation-nameEpisode"><a href="#">${character.location.name}</a></div>

                            <p class="episode-character">First seen in:</p>
                            <div class="nameLocation-nameEpisode"><a href="#">${episodeName}</a></div>
                        </div>
                    </div>`;
        })
      );
      // Inserta el HTML generado en el contenedor en el documento
      html.innerHTML = `<div class="container-box">${tpt.join("")}</div>`;
    });
};

// Llama a la función principal con la URL de la API
getDatos(url);
