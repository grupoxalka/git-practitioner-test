let url = "https://rickandmortyapi.com/api/";
let html = document.querySelector(".mycontainer");

let arrayper = [];

// Genera un array con 6 números aleatorios entre 1 y 100
for (let i = 0; i < 6; i++) {
  arrayper.push(Math.floor(Math.random() * (826 - 1) + 1));
}

// Función para obtener el nombre de un episodio a partir de su URL
let obtenerEpisodioNombre = (episodeUrl) => {
  return fetch(episodeUrl)
    .then((res) => res.json())
    .then((episodeData) => {
      return episodeData.name;
    });
};

// Función principal para obtener datos de personajes y episodios
let obtenerDatos = (apiURL) => {
  return fetch(`${apiURL}character/${arrayper}`)
    .then((res) => res.json())
    .then(async (response) => {
      // Utiliza Promise.all para hacer solicitudes concurrentes a la API de episodios
      const tpt = await Promise.all(
        response.map(async (character) => {
          // Obtiene el nombre del episodio utilizando la función anterior
          const episodeName = await obtenerEpisodioNombre(character.episode[0]);
          // Construye el HTML para cada personaje con su respectivo episodio
          return `<div class="sub-box">
                        <img src="${character.image}" id="img" alt="">
                        <div class="text-container">
                            <div class="tituloper"><a href="#"><strong>${character.name}</strong></a></div>
                            <div class="status">
                                <div class="circle"></div>
                                <p class="inftitulo">${character.status} - ${character.species}</p>
                            </div>
                            <p class="caracter1">Last known location:</p>
                            <div class="infcaracter"><a href="#">${character.location.name}</a></div>

                            <p class="caracter2">First seen in:</p>
                            <div class="infcaracter"><a href="#">${episodeName}</a></div>
                        </div>
                    </div>`;
        })
      );
      // Inserta el HTML generado en el contenedor en el documento
      html.innerHTML = `<div class="container-box">${tpt.join("")}</div>`;
    });
};

// Llama a la función principal con la URL de la API
obtenerDatos(url);
