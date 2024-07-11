document.addEventListener("DOMContentLoaded", () => {
  const btnAgregarFoto = document.getElementById("btnAgregarFoto");
  const btnEliminar = document.getElementById("btnEliminar");
  const addProduct = document.getElementById("addProduct");

  const productForm = document.getElementById("productForm");
  const productPhoto = document.getElementById("productPhoto");

  let id1;
  let info;

  const alertValidacionesTexto = document.getElementById(
    "alertValidacionesTexto"
  );
  const alertaValidaciones = document.getElementById("alertaValidaciones");
  const productsList = document.getElementById("productsList"); // Asegúrate de tener este elemento en tu HTML

  let isValid = true;
  let datosProducto = JSON.parse(localStorage.getItem("productos")) || []; //Se crea el JSON para almacenar los productos en localStorage

  // Función para Cloudinary
  let widget_cloudinary = cloudinary.createUploadWidget(
    {
      cloudName: "du0gwlxor",
      uploadPreset: "cookies",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Imagen subida con éxito", result.info);
        productPhoto.src = result.info.secure_url;
      }
    }
  );

  btnAgregarFoto.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      widget_cloudinary.open();
      productPhoto.style.display = "block";
    },
    false
  );

  btnEliminar.addEventListener("click", (e) => {
    e.preventDefault();
    productPhoto.style.display = "none";
  });

  addProduct.addEventListener("click", (e) => {
    e.preventDefault();

    const productName = document.getElementById("productName").value.trim();
    const productDescription = document
      .getElementById("productDescription")
      .value.trim();
    const productPrice = document.getElementById("productPrice").value.trim();
    const productImage = productPhoto.src;

    // Borra datos de validaciones
    alertValidacionesTexto.innerHTML = "";
    alertaValidaciones.classList.add("d-none");
    isValid = true;

    // Validaciones con expresiones regulares
    const nameValidation = /^(?!.*(\w|\s)\1{3})[0-9a-zA-ZÀ-ÿ\s]{3,30}$/; // nombres con caracteres especiales, acentos y demas de 3-30 caracteres
    const descriptionValidation =
      /^(?!.*(\w|\s)\1{4})[0-9a-zA-ZÀ-ÿ!¡¿?'=()&/%$#"|+*´¨{}[\]\-.:,;<>_\s]{10,200}$/; //descripcion de 10 a 200 caracteres, letras, numeros, mayusculas y caracteres  especiales de escritura latina, no permite repetir caracteres 4 veces seguidas
    const priceValidation = /^(0|[1-9]\d*)(\.\d{1,2})?$/;

    let mensajes = [];

    if (!nameValidation.test(productName)) {
      mensajes.push(
        "El nombre del producto debe tener entre 3 y 30 caracteres."
      );
      isValid = false;
    }

    if (!descriptionValidation.test(productDescription)) {
      mensajes.push(
        "La descripción del producto debe tener entre 10 y 200 caracteres."
      );
      isValid = false;
    }

    if (!priceValidation.test(productPrice) || parseFloat(productPrice) < 0) {
      mensajes.push(
        "El precio ingresado no es correcto; solo se permiten números con hasta dos decimales."
      );
      isValid = false;
    }

    if (!productImage) {
      mensajes.push("Sube una foto del producto.");
      isValid = false;
    }

    if (!isValid) {
      alertaValidaciones.classList.remove("d-none");
      alertValidacionesTexto.innerHTML = mensajes.join("<br>");
      return;
    } else {
      alertaValidaciones.classList.add("d-none");

      //==========================================================================

      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer: eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTcyMDcxMTk1OSwiZXhwIjoxNzIwNzQ3OTU5fQ.u5ONmCQHiYUxIFUAHZcqabQAhN3LLdhVY7Ygjm43Yd8");
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        "nombre": productName,
        "descripcion": productDescription,
        "imagen": productImage,
        "precio": productPrice
      });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      fetch("http://localhost:8080/api/productos/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.error(error));
      
      //==========================================================================

       // Crear el producto
       let producto = {
        id: Date.now(), //brinda un id unico
        name: productName,
        description: productDescription,
        precio: productPrice,
        img: productImage,
      };

      datosProducto.push(producto);
      localStorage.setItem("productos", JSON.stringify(datosProducto));

      console.log(datosProducto);

      // Crear tarjetas de producto
      createCards(datosProducto);

      // Borra el formulario
      productForm.reset();
    }
  });
  //Se agrega a la función el data-id

  function createCards(products) {

    console.log(products.length);
    productsList.innerHTML = "";
    products.forEach((p) => {
      console.log(p.id, p.name, p.description, p.precio, p.img);
      productsList.insertAdjacentHTML(
        "beforeend",
        `<div class="card" style="width: 18rem;" data-id="${p.id}"> 
                <img src=${p.img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${p.name}</h5>
                  <p class="card-text" id="descripcion">${p.description}</p>
                  <p class="card-text" id ="precio">${p.precio}</p>                  
                  <a href="#" class="btn btn-primary btn-delete">Borra producto</a>
                </div>
              </div>
              <br>`
      ); //beforeend
    }); //forEach

    // Agregar eventos de clic a los botones de borrar
    const deleteButtons = document.querySelectorAll(".btn-delete");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const card = button.closest(".card");
        const productId = card.getAttribute("data-id");
        const cardTitle = card.querySelector(".card-title").innerText;
        deleteProduct(productId,cardTitle);
        //encontramos 
      });
    });
  } //function createCards



async function deleteProduct(id, nombre) {
  try {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer: eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTcyMDcxMTk1OSwiZXhwIjoxNzIwNzQ3OTU5fQ.u5ONmCQHiYUxIFUAHZcqabQAhN3LLdhVY7Ygjm43Yd8"
    );

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    // Realizar la solicitud GET para obtener la lista de productos
    let response = await fetch("http://localhost:8080/api/productos/", requestOptions);
    let info = await response.json();

    // Buscar el producto por nombre y obtener su ID
    let id1;
    info.forEach((p) => {
      if (p.nombre == nombre) {
        console.log("Producto encontrado:", p.nombre);
        console.log("ID del producto:", p.id);
        id1 = p.id;
      }
    });

    if (!id1) {
      console.log("No se encontró el producto con nombre 'Nombre del Producto 2'");
      return;
    }

    // Convertir id1 a string (si es necesario)
    id1 = id1.toString();

    // Preparar para la solicitud DELETE
    myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer: eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTcyMDcxMTk1OSwiZXhwIjoxNzIwNzQ3OTU5fQ.u5ONmCQHiYUxIFUAHZcqabQAhN3LLdhVY7Ygjm43Yd8"
    );

    requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    // Realizar la solicitud DELETE para eliminar el producto
    response = await fetch("http://localhost:8080/api/productos/" + id1, requestOptions);
    let result = await response.text();
    console.log(result); // Mostrar el resultado del DELETE

  } catch (error) {
    console.error("Error en deleteProduct:", error);
  }

  // Filtrar los productos para eliminar el producto con el id proporcionado
  datosProducto = datosProducto.filter((product) => product.id != id);
  localStorage.setItem("productos", JSON.stringify(datosProducto));
  // Volver a crear las tarjetas de producto
  createCards(datosProducto);
  //recargar la lista de productos en productos.html
  window.location.reload();


} //función borrar productos
//Inicializa de nuevo la lista de productos una vez que se borro alguno
createCards(datosProducto);
}); //función borrar productos
