const API = "https://rickandmortyapi.com/api/character";
const main = document.querySelector('main');

async function fetchData(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}

async function getData(url){
    try{
        const response = await fetchData(url);
        
        response.results.forEach(personaje =>{
            main.innerHTML += `
        <div class="tarjeta">
        <div class="tarjeta-div">
        <img src="${personaje.image}" alt="personaje"></div>
            
            <h3>Nombre: <span>${personaje.name}</span></h3>
            <h3>Location: <span>${personaje.location.name}</span></h3>
            <h3>Especie: <span>${personaje.species}</span></h3>
        </div>
        `})

        console.log(response.results);
        
    }catch{
        throw new Error ("Error en la API")
    }
}
console.log(getData(API));