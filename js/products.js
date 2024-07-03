// Función para cargar productos desde el localStorage
function loadProductsFromLocalStorage() {
    let storedProducts = JSON.parse(localStorage.getItem('productos')) || [];
    storedProducts.forEach(product => {
        addProductItem(product);
    });
}
// Función para agregar un producto al HTML
function addProductItem(product) {
    const itemHTML = `
        <div class="card mb-4" data-id="${product.id}">
        <div>
        <img src="${product.image}" class="card-img-top" alt="image">
        </div>
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p style="font-weight: bold; color: black;">$${product.price}</p>
                 <div clas="card-info" style="text-align:center;"> 
                <a href="#" class="btn btn-delete">Añadir al carrito</a>  
            </div>
        </div>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

//Funcion para agregar los cursos al HTML
function addItem(item) {
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
            <a href="${item.link}">+ más info</a> <br>
            <a href="${item.carrito}" class="btn" id="btnEnviar">Añadir al carrito</a> 
            </br> 
        </div>
    </div>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

//Función agregar etiqueta al HTML
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
    { name: 'Decoración estilo Acuarela', img: 'src/productos/acuarela3.jpg', description: 'Sumérgete en el emocionante universo de la decoración, donde aprenderás a transformar tus creaciones en auténticas obras de arte comestibles.',precio: '250', link: 'curso1.html', carrito: 'carrito.html' },
    { name: 'Decoración de Personajes', img: 'src/productos/bobesponjaHalloween.jpg', description: 'Aprende a decorar deliciosos postres con el divertido y colorido mundo de Bob Esponja y sus amigos.',precio: '250', link: 'curso2.html', carrito: 'carrito.html' },
    { name: 'Decoración de Catrinas', img: 'src/productos/catrina2.jpg', description: 'Descubre la tradición mexicana mientras aprendes a crear hermosas decoraciones inspiradas en esta emblemática figura del Día de los Muertos.',precio: '250', link: 'curso3.html', carrito: 'carrito.html' },
    { name: 'Decoración de Flores', img: 'src/productos/flores.jpg', description: 'Aprende el apasionante arte de la decoración donde crearás exquisitas flores de azúcar y otros adornos florales para embellecer tus dulces  creaciones y sorprender a tus seres queridos. ',precio: '250', link: 'curso4.html', carrito: 'carrito.html' },

];

// Lista de etiquetas
const etiquetas = [
    { name: 'Navidad', img: 'src/productos/navidad.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.',precio: '50', link: '#', carrito: 'carrito.html' },
    { name: 'Día de Muertos', img: 'src/productos/dia de muertos.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.',precio: '50', link: '#', carrito: 'carrito.html' },
    { name: 'San Valetín', img: 'src/productos/sanvalentin (2).jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.',precio: '50', link: '#', carrito: 'carrito.html' },
    { name: 'Halloween', img: 'src/productos/halloween.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.',precio: '50', link: '#', carrito: 'carrito.html' },
    { name: '15 de Septiembre', img: 'src/productos/septiembre.png', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.',precio: '50', link: '#', carrito: 'carrito.html' },
    { name: 'Día de las madres', img: 'src/productos/mothers.jpg', description: 'Archivo PDF Con 5 diseños diferentes de temporada </br> Incluye diferentes medidas para etiquetas.',precio: '50', link: '#', carrito: 'carrito.html' },

];


window.onload = function () {
    products.forEach(addItem);
    etiquetas.forEach(addEtiquetaItem);
    loadProductsFromLocalStorage(); //cargar productos desde localStorage
};

// Evento para borrar productos en productos.html
document.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("btn-delete")) {
        e.preventDefault();
        const card = e.target.closest(".card");
        const productId = card.getAttribute("data-id");
        deleteProduct(productId);
    }
});

function deleteProduct(id) {
    let storedProducts = JSON.parse(localStorage.getItem('productos')) || [];
    storedProducts = storedProducts.filter(product => product.id != id);
    localStorage.setItem('productos', JSON.stringify(storedProducts));
    // Recargar la lista de productos
    loadProductsFromLocalStorage();
}