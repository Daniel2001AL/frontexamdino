const urlBase = 'http://34.228.25.24/dinos';
const urlBase2 = 'http://52.73.107.70/dinos';
const urlBase3 = 'http://3.83.229.144/dinos/random';

function getDino(){
    const url = getUrl(urlBase);
    console.log(url);
    fetch(url)
    .then(promesa => promesa.json())
    .then(async contenido => {
        console.log(contenido)
        let element = document.getElementById('personaje');
        element.innerHTML = `<p>${JSON.stringify(contenido.Nombre)}<p>`
    })
    .catch( err => console.log(err))

    const url2 = getUrl(urlBase2);
    fetch(url2)
    .then(promesa => promesa.json())
    .then(async contenido => {
        console.log(contenido)
        let element = document.getElementById('desc');
        element.innerHTML = `<p>${JSON.stringify(contenido.Descripcion)}<p>`
    })
    .catch( err => console.log(err))
    
}

function getUrl(urlpass){
    let num =  document.getElementById('iddino').value;
    const url =  `${urlpass}/${num}`;
    return url;
}

function getRandomDino(){
    fetch(urlBase3)
    .then(promesa => promesa.json())
    .then(async contenido => {
        console.log(contenido)
        let elementname = document.getElementById('dinoRandom');
        let elementdes = document.getElementById('dinorandes');
        elementname.innerHTML = `<p>${JSON.stringify(contenido.Name)}<p>`
        elementdes.innerHTML = `<p>${JSON.stringify(contenido.Description)}<p>`
    })
    .catch( err => console.log(err))
}


