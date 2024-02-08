let url = "https://rickandmortyapi.com/api/";
let html = document.querySelector(".main-container");
let footer = document.querySelector(".footer");

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
let getData = (apiURL) => {
  return fetch(`${apiURL}character/${arrayper}`)
    .then((res) => res.json())
    .then(async (response) => {
      // Utiliza Promise.all para hacer solicitudes concurrentes a la API de episodios
      const contentcharacter = await Promise.all( // contentcharacter construye un arreglo de bloques html con cada personaje
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
                            <p class="location-episode-title">Last known location:</p>
                            <div class="nameLocation-nameEpisode"><a href="#">${character.location.name}</a></div>

                            <p class="location-episode-title">First seen in:</p>
                            <div class="nameLocation-nameEpisode"><a href="#">${episodeName}</a></div>
                        </div>
                    </div>`;
        })
      );
      // Inserta el HTML generado en el contenedor en el documento
      html.innerHTML = `<div class="container-box">${contentcharacter.join("")}</div>`; //contentcharacter se inserta en el container-box
    });
};

// Función para obtener datos del footer y mostrar el total de personajes, locaciones y episodios
let getFooterData = (apiURL) => {
  return Promise.all([
    fetch(`${apiURL}character`),
    fetch(`${apiURL}location`),
    fetch(`${apiURL}episode`),
  ]).then(async ([charactersRes, locationsRes, episodesRes]) => {
    const charactersData = await charactersRes.json();
    const locationsData = await locationsRes.json();
    const episodesData = await episodesRes.json();

    // Muestro el total de personajes, locations y episodes en el footer
    footer.innerHTML = `<div class="sub-footer"><a class="active" href="#">CHARACTERS: ${charactersData.info.count}</a></div>
                        <div class="sub-footer"><a class="active" href="#">LOCATIONS: ${locationsData.info.count}</a></div>
                        <div class="sub-footer"><a class="active" href="#">EPISODES: ${episodesData.info.count}</a></div>`;
  });
};

// Llamo a la función principal con la URL de la API
getData(url);
getFooterData(url);