const API_URL = "https://rickandmortyapi.com/api";
//URL DEL API GENERAL

//elementos de nuestro DOM
const HTMLResponse = document.querySelector("#main-card-container");
HTMLResponse.className = "main-card-container";
//creacion del array que genera numeros aleatorios dentro 1 al 100
let array = [];

for (let i = 0; i < 6; i++) {
  array.push(Math.floor(Math.random() * (100 - 1))); //genero numeros y convierte enteros
}

//funcnion que hace el llamado a la api  | el servicio fetch
fetch(`${API_URL}/character/${array}`)
  .then((response) => response.json()) //ya viene como json, lo convierte a un obj
  .then((responseCharacters) => {
    //parametro

    responseCharacters.forEach(async (responseCharacter) => {
      //declaracion de propiedades
      let documentFragment = document.createDocumentFragment(); // no es conteneodr es un fragmento para que se muestre en la pantalla
      let divCard = document.createElement("div");
      let divImgContainer = document.createElement("div");
      let divInfoContainer = document.createElement("div");

      let divNameStatusContainer = document.createElement("div");
      let divEpisodeContainer = document.createElement("div");
      let divLocationContainer = document.createElement("div");

      let imgElement = document.createElement("img");
      let aNameElement = document.createElement("h2");
      let pStatusElement = document.createElement("p");
      let pTitleLocationElement = document.createElement("p");
      let aLocationElement = document.createElement("a");
      let pTitleEpisodeElement = document.createElement("p");
      let nameEpisode = await getEpisode(responseCharacter.episode[0]);
      let aEpisodeElement = document.createElement("a");

      divCard.className = "card";
      divImgContainer.className = "img-container";
      divInfoContainer.className = "info-container";
      divNameStatusContainer.className = "name-container";
      aNameElement.className = "name-element";
      divLocationContainer.className = "location-container";
      divEpisodeContainer.className = "episode-container";
      aNameElement.className = "name-element";
      aEpisodeElement.className = "a-edit-container";
      aLocationElement.className = "a-edit-container";
      imgElement.className = "imgCharacters";

      imgElement.src = `${responseCharacter.image}`;
      aNameElement.textContent = `${responseCharacter.name}`;
      pStatusElement.textContent = `${responseCharacter.status} - ${responseCharacter.species}`;
      pTitleLocationElement.textContent = `Last known location:`;
      aLocationElement.textContent = `${responseCharacter.location.name}`; //acceso a una propiedad que contine un obj
      pTitleEpisodeElement.textContent = `First seen in:`;
      aEpisodeElement.textContent = `${nameEpisode}`;

      divImgContainer.append(imgElement);
      divNameStatusContainer.append(aNameElement, pStatusElement);
      divLocationContainer.append(pTitleLocationElement, aLocationElement);
      divEpisodeContainer.append(pTitleEpisodeElement, aEpisodeElement);

      divInfoContainer.append(divNameStatusContainer, divLocationContainer, divEpisodeContainer);
      divCard.append(divImgContainer, divInfoContainer);
      documentFragment.appendChild(divCard);

      //Se muestra en el html
      HTMLResponse.appendChild(documentFragment); //le paso el contenerdor
    });
  });

async function getEpisode(url) {
  let respose = await fetch(`${url}`);

  let data = await respose.json(); // lo convierte a json para que salieran los datos del episodio

  return data.name;
}
