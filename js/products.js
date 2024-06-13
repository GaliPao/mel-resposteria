function recortar(item) {

    let  maxPalabras= 50;
    let array="";
    if (item.description.length > maxPalabras) {
        for (let i = 0; i< maxPalabras; i++) {
            array = array + item.description[i];
        }
        array+="  ...";
        item.description=array;

        console.log(item.description);
    }
}

function addItem(item) {
    recortar(item);
    const itemHTML = `
        <div class="card mb-4">
            <a href="${item.curso}"><img src="${item.img}" class="card-img-top" alt="image"></<>
            <div class="card-body">
                <h5 class="card-title" ">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p style="font: bold; color: black;"> $ ${item.precio} </p>  
                <a href="#" class="btn" id="btnEnviar">más información</a>  
            </div>
        </div>
        `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function addEtiquetaItem(item) {
    recortar(item);
    const itemHTML = `
        <div class="card mb-3" ">
            <img src="${item.img}" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p style="font: bold; color: black;"> $ ${item.precio} </p>  
                <a href="#" class="btn"  id="btnEnviar">más información</a>  
            </div>
        </div>
    `;
    const etiquetasContainer = document.getElementById("etiquetas-items");
    etiquetasContainer.innerHTML += itemHTML;
    etiquetasContainer

}

// Lista de productos
const products = [
    { name: 'Curso estilo Acuarela', img: 'src/productos/acuarela3.jpg', description: 'Aprende esta técnica que puedes implementar en...', curso:'curso1.html' },
    { name: 'Decoración de personajes', img: 'src/productos/bobesponjaHalloween.jpg', description: 'Decoración de personaje de caricatura', curso:'curso2.html' },
    { name: 'Catrina', img: 'src/productos/catrina2.jpg', description: 'Aprenderas técnica de volumen, aplicación de glitter y más ...', curso:'curso3.html' },
    { name: 'Decoración de flores', img: 'src/productos/flores.jpg', description: 'Aprendera utilizar las duyas y la consistencia del royal icing', curso:'curso4.html' },

];

// Lista de etiquetas
const etiquetas = [
    { name: 'Navidad', img: 'src/productos/navidad.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    { name: 'Dia de Muertos', img: 'src/productos/dia de muertos.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    { name: 'San Valetin', img: 'src/productos/sanvalentin (2).jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    { name: 'Halloween', img: 'src/productos/halloween.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    { name: '15 de Septiembre', img: 'src/productos/septiembre.png', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    { name: 'Dia de las madres', img: 'src/productos/mothers.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
];


window.onload = function () {
    products.forEach(addItem);
    etiquetas.forEach(addEtiquetaItem);


    
};


