const API_URL = "https://rickandmortyapi.com/api";
//URL DEL API GENERAL

//elementos de nuestro DOM
const HTMLResponse = document.querySelector("#app");
HTMLResponse.className = "app";
//creacion del array que genera numeros aleatorios dentro 1 al 100
let array = [];

for (let i = 0; i < 6; i++) {
  array.push(Math.floor(Math.random() * (100 - 1) + 1)); //genero numeros y convierte enteros
}

//funcnion que hace el llamado a la api  | el servicio fetch
fetch(`${API_URL}/character/${array}`)
  .then((response) => response.json()) //ya viene como json, lo convierte a un obj
  .then((responseCharacters) => {
    //parametro

    responseCharacters.forEach(async (responseCharacter) => {
      //console.log(responseCharacter);
      //declaracion de propiedades
      let documentFragment = document.createDocumentFragment(); // es mi contenedor principal
      let elemImg = document.createElement("img");
      let elemDiv = document.createElement("div");
      let elemH2 = document.createElement("h2");
      let elemStatus = document.createElement("p");
      let elemP1 = document.createElement("p");
      let elemLoc = document.createElement("a");
      let elemP2 = document.createElement("p");
      let elemEp = document.createElement("a"); //para el episodio
      let nameEpisode = await getEpisode(responseCharacter.episode[0]); // arreglando una promise y llamando a name episode llega como obj
      //console.log("nameEpisode", typeof nameEpisode);

      //llamo estilos css con .className
      elemDiv.className = "inf-card";
      elemH2.className = "name";
      elemLoc.className = "a-edit-container";
      elemEp.className = "a-edit-container";
      elemLoc.className ="a-card"
      elemEp.className = "a-card"
      elemImg.className = "img-card";


      //traigo la informacion
      elemImg.src = `${responseCharacter.image}`;
      elemH2.textContent = `${responseCharacter.name}`; //contenido de texto
      elemStatus.textContent = `${responseCharacter.status} - ${responseCharacter.species}`;
      elemP1.textContent = `Last known location:`;
      elemLoc.textContent = `${responseCharacter.location.name}`; //acceso a una propiedad que contine un obj
      elemP2.textContent = `First seen in:`;
      elemEp.textContent = `${nameEpisode}`;

      //creo nodos o hijos lo como en el contenedos principal
      documentFragment.appendChild(elemDiv);
      elemDiv.appendChild(elemImg);
      elemDiv.appendChild(elemH2);
      elemDiv.appendChild(elemStatus);
      elemDiv.appendChild(elemP1);
      elemDiv.appendChild(elemLoc);
      elemDiv.appendChild(elemP2);
      elemDiv.appendChild(elemEp);

    

      //Se muestra en el html
      HTMLResponse.appendChild(documentFragment); //le paso el contenerdor
    });
  });

async function getEpisode(url) {
  //console.log(url);

  let respose = await fetch(`${url}`);
  //console.log(respose);

  let data = await respose.json(); // lo convierte a json para que salieran los datos del episodio
  //console.log(data);

  return data.name;
}
