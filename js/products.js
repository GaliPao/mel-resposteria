function addItem(item) {
    const itemHTML = `
        <div class="card mb-4" style="width: 30rem; height: 45rem; padding: 20px 20px 20px;" >
            <img src="${item.img}" class="card-img-top" alt="image">
             <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 30px;">
                <h5 class="card-title" style="color: #D84A40; margin-top: 30px ;font-family: 'Montserrat', sans-serif; text-align: center;">${item.name}</h5>
                <p class="card-text" style="color: #828282; font-family: 'Neue', sans-serif; text-align: justify; flex-grow: 1; margin-top: 15px; border-bottom">${item.description}</p>
                <div style="text-align: center; ">
                <a href="${item.link}" > + más info</a> </br>
                <a href="${item.carrito}"  class="btn" style="width: 50%; height: auto; color: white; background-color: #DD7979; "id="btnEnviar">
                 Añadir al carrito</a>               
            </div> 
        </div>
        `; ///////
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function addEtiquetaItem(item) {
    const itemHTML = `
        <div class="card mb-3" style="width: 30rem; height: 45rem; padding: 20px 20px 20px ;">
            <img src="${item.img}" class="card-img-top" alt="image" style="width: auto; height: 60%; >
            <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 300px;">          
                <h5 class="card-title" style="color: #D84A40; margin-top: 30px ;font-family: 'Montserrat', sans-serif; text-align: center;  ">${item.name}</h5>
                <p class="card-text" style="color: #828282; font-family: 'Neue', sans-serif; text-align: justify; flex-grow: 1; margin-top: 15px;">${item.description}</p> 
                <div style="text-align: center;">
                <a href="${item.link}" > + más info</a> </br>
                <a href="${item.link}"  class="btn" style="width: 50%; height: auto; color: white; background-color: #DD7979; "id="btnEnviar"> 
                Añadir al carrito</a> 
                </br> 
            </div>
        </div>
    `;//
    const etiquetasContainer = document.getElementById("etiquetas-items");
    etiquetasContainer.innerHTML += itemHTML;
}


// Lista de productos
const products = [
    { name: 'Curso estilo Acuarela', img:'src/productos/acuarela3.jpg', description: 'Sumérgete en el emocionante universo de la decoración donde  aprenderás cómo transformar tus creaciones en auténticas obras de arte comestibles. ', link: './curso1.html', carrito: './carrito.html'},
    { name: 'Curso decoración de personaje Bob Esponja', img: 'src/productos/bobesponjaHalloween.jpg', description: 'Aprende a decorar deliciosos postres con el divertido y colorido mundo de Bob Esponja y sus amigos.' , link: './curso2.html', carrito: './carrito.html'},
    { name: 'Curso decoración Catrina', img: 'src/productos/catrina2.jpg', description: 'Sumérgete en la tradición mexicana mientras aprendes a crear hermosas decoraciones inspiradas en esta emblemática figura del Día de los Muertos. ', link: './curso3.html', carrito: './carrito.html'},
    { name: 'Curso decoración de flores', img: 'src/productos/flores.jpg', description: 'Aprende el apasionante arte de la decoración donde crearás exquisitas flores de azúcar y otros adornos florales para embellecer tus dulces  creaciones y sorprender a tus seres queridos. ', link: './curso4.html', carrito: './carrito.html'},
    
];

// Lista de etiquetas
const etiquetas = [
    { name: 'Navidad', img:'src/productos/navidad.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.'},
    { name: 'Día de Muertos', img: 'src/productos/dia de muertos.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.' },
    { name: 'San Valetín', img: 'src/productos/sanvalentin (2).jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.' },
    { name: 'Halloween', img: 'src/productos/halloween.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.' },
    { name: '15 de Septiembre', img: 'src/productos/septiembre.png', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.' },
    { name: 'Día de las madres', img: 'src/productos/mothers.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.'},
    
];


window.onload = function() {
    products.forEach(addItem);
    etiquetas.forEach(addEtiquetaItem);
};