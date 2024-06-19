/* function recortar(item) {

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
*/


function addItem(item) {
    // recortar(item);
    const itemHTML = `
        <div class="card mb-4">
            <div>
            <a href="${item.link}"><img src="${item.img}" class="card-img-top" alt="image"></a>
            </div>
            <div class="card-body">
                <h5 class="card-title" ">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p style="font-weight: bold; color: black;"> $ ${item.precio} </p>  
                <div clas="card-info" style="text-align:center;">
                <a href="${item.link}">+ más info</a> 
                <a href="${item.carrito}" class="btn" id="btnEnviar">Añadir al carrito</a> 
                </br> 
            </div>
        </div>
        `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
    }
    
    function addEtiquetaItem(item) {
    // recortar(item);
    const itemHTML = `
      <div class="card mb-4">
            <div>
            <a href="${item.link}"><img src="${item.img}" class="card-img-top" alt="image"></a>
            </div>
            <div class="card-body">
                <h5 class="card-title" ">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p style="font-weight: bold; color: black;"> $ ${item.precio} </p>  
                <div clas="card-info" style="text-align:center;">
                <a href="${item.link}">+ más info</a> 
                <a href="${item.carrito}" class="btn" id="btnEnviar">Añadir al carrito</a> 
                </br> 
            </div>
        </div>
        `;
    const itemsContainer = document.getElementById("etiquetas-items");
    itemsContainer.innerHTML += itemHTML;
    }
    
    // Lista de productos
    const products = [
    { name: 'Decoracion estilo Acuarela', img:'src/productos/acuarela3.jpg', description: 'Sumérgete en el emocionante universo de la decoración donde  aprenderás cómo transformar tus creaciones en auténticas obras de arte comestibles. ', link: 'curso1.html', carrito: 'carrito.html'},
    { name: 'Decoración de personajes', img: 'src/productos/bobesponjaHalloween.jpg', description: 'Aprende a decorar deliciosos postres con el divertido y colorido mundo de Bob Esponja y sus amigos.' , link: 'curso2.html', carrito: 'carrito.html'},
    { name: 'Decoración de Catrinas', img: 'src/productos/catrina2.jpg', description: 'Sumérgete en la tradición mexicana mientras aprendes a crear hermosas decoraciones inspiradas en esta emblemática figura del Día de los Muertos. ', link: 'curso3.html', carrito: 'carrito.html'},
    { name: 'Decoración de flores', img: 'src/productos/flores.jpg', description: 'Aprende el apasionante arte de la decoración donde crearás exquisitas flores de azúcar y otros adornos florales para embellecer tus dulces  creaciones y sorprender a tus seres queridos. ', link: 'curso4.html', carrito: 'carrito.html'},
    
    ];
    
    // Lista de etiquetas
    const etiquetas = [
    { name: 'Navidad', img:'src/productos/navidad.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.', link: '#', carrito: 'carrito.html'},
    { name: 'Día de Muertos', img: 'src/productos/dia de muertos.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.', link: '#', carrito: 'carrito.html'},
    { name: 'San Valetín', img: 'src/productos/sanvalentin (2).jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.', link: '#', carrito: 'carrito.html' },
    { name: 'Halloween', img: 'src/productos/halloween.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.', link: '#', carrito: 'carrito.html' },
    { name: '15 de Septiembre', img: 'src/productos/septiembre.png', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.', link: '#', carrito: 'carrito.html' },
    { name: 'Día de las madres', img: 'src/productos/mothers.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.', link: '#', carrito: 'carrito.html'},
    
    ];
    
    
    
    window.onload = function () {
    products.forEach(addItem);
    etiquetas.forEach(addEtiquetaItem);    
    };
    