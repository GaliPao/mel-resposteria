function loadProductsFromLocalStorage() {
  let storedProducts = JSON.parse(localStorage.getItem("productos")) || [];

  storedProducts.forEach((product) => {
    /*   Selector de productos vs cursos
    if(product.type==true){ //true para etiquetas false para cursos
            addEtiquetaItem(product);
        }else{
            addItem(product);
        }
    });*/
    addEtiquetaItem(product); //se agrega en galletas no en cursos
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

//Función agregar etiqueta al HTML
function addEtiquetaItem(item) {
  // recortar(item);
  const itemHTML = `
  <div class="card mb-4">
        <div>
        <a href="#"><img src="${item.imagen}" class="card-img-top" alt="image"></a>
        </div>
        <div class="card-body">
            <h5 class="card-title" ">${item.nombre}</h5>
            <p class="card-text">${item.descripcion}</p>
            <p style="font-weight: bold; color: black;"> $ ${item.precio} </p>  
            <div clas="card-info" style="text-align:center;">
            <a href="#" class="btn" id="btnEnviar">Añadir al carrito</a> 
            </br> 
        </div>
    </div>
    `;
  const itemsContainer = document.getElementById("etiquetas-items");
  itemsContainer.innerHTML += itemHTML;
}

//Getting from DB

function addItem(item) {
  const itemHTML = `
      <div class="card mb-4">
          <div>
          <a href="${item.link}"><img src="${item.imagen}" class="card-img-top" alt="image"></a>
          </div>
          <div class="card-body">
              <h5 class="card-title" ">${item.nombre}</h5>
              <p class="card-text">${item.descripcion}</p>
              <p style="font-weight: bold; color: black;"> $ ${item.precio} </p>  
              <div clas="card-info" style="text-align:center;">
              <a href="#">+ más info</a> <br>
              <a href="${item.carrito}" class="btn" id="btnEnviar">Añadir al carrito</a> 
              </br> 
          </div>
      </div>
      `;
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

window.onload = function () {
  loadProductsFromLocalStorage(); //cargar productos desde localStorage

  const URL = "http://localhost:8080/api/productos/";
  fetch(URL)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].nombre.trim().split(/\s+/)[0] == "Curso") {
          addItem(data[i]);
        } else {
          addEtiquetaItem(data[i]);
        }
      }
    });
};

// Evento para borrar productos en productos.html
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("btn-delete")) {
    e.preventDefault();
    const card = e.target.closest(".card");
    const productId = card.getAttribute("data-id");
    deleteProduct(productId);
  }
});

function deleteProduct(id) {
  let storedProducts = JSON.parse(localStorage.getItem("productos")) || [];
  storedProducts = storedProducts.filter((product) => product.id != id);
  localStorage.setItem("productos", JSON.stringify(storedProducts));
  // Recargar la lista de productos
  loadProductsFromLocalStorage();
}
