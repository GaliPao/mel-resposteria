function addItem(item) {
    const itemHTML = `
        <div class="card mb-4" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title" style="color: #D84A40; font-family: 'Montserrat', sans-serif; text-align: center;">${item.name}</h5>
                <p class="card-text" style="color: #828282; font-family: 'Neue', sans-serif;">${item.description}</p>
                <a href="#" class="btn" style="width: 50%; height: auto; color: white; background-color: #DD7979;" id="btnEnviar">más info</a>  
            </div>
        </div>
        `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function addEtiquetaItem(item) {
    const itemHTML = `
        <div class="card mb-3" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title" style="color: #D84A40; font-family: 'Montserrat', sans-serif; text-align: center;">${item.name}</h5>
                <p class="card-text" style="color: #828282; font-family: 'Neue', sans-serif;">${item.description}</p>
                <a href="#" class="btn" style="width: 50%; height: auto; color: white; background-color: #DD7979;" id="btnEnviar">más info</a>  
            </div>
        </div>
    `;
    const etiquetasContainer = document.getElementById("etiquetas-items");
    etiquetasContainer.innerHTML += itemHTML;
}


// Lista de productos
const products = [
    { name: 'Curso estilo Acuarela', img:'src/productos/acuarela3.jpg', description: 'Aprende esta técnica que puedes implementar en...'},
    { name: 'Curso decoración de personaje Bob Esponja', img: 'src/productos/bobesponjaHalloween.jpg', description: 'Decoración de personaje de caricatura' },
    { name: 'Catrina', img: 'src/productos/catrina2.jpg', description: 'Aprenderas técnica de volumen, aplicación de glitter y más ...' },
    { name: 'Decoración de flores', img: 'src/productos/flores.jpg', description: 'Aprendera utilizar las duyas y la consistencia del royal icing' },
    
];

// Lista de etiquetas
const etiquetas = [
    { name: 'Navidad', img:'src/productos/navidad.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.'},
    { name: 'Dia de Muertos', img: 'src/productos/dia de muertos.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    { name: 'San Valetin', img: 'src/productos/sanvalentin (2).jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    { name: 'Halloween', img: 'src/productos/halloween.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    { name: '15 de Septiembre', img: 'src/productos/septiembre.png', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    { name: 'Dia de las madres', img: 'src/productos/mothers.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada incluye diferentes medidad para etiquetas.' },
    
];


window.onload = function() {
    products.forEach(addItem);
    etiquetas.forEach(addEtiquetaItem);
};