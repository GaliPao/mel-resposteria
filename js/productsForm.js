document.addEventListener("DOMContentLoaded", () => {
    const btnAgregarFoto = document.getElementById("btnAgregarFoto");
    const btnEliminar = document.getElementById("btnEliminar");
    const addProduct = document.getElementById("addProduct");

    const productForm = document.getElementById("productForm");
    const productPhoto = document.getElementById("productPhoto");

    const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
    const alertaValidaciones = document.getElementById("alertaValidaciones");
    const productsList = document.getElementById("productsList"); // Asegúrate de tener este elemento en tu HTML

    let isValid = true;
    let datosProducto = JSON.parse(localStorage.getItem('productos'))|| []; //Se crea el JSON para almacenar los productos en localStorage

    // Función para Cloudinary
    let widget_cloudinary = cloudinary.createUploadWidget({
        cloudName: "du0gwlxor",
        uploadPreset: "cookies",
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log("Imagen subida con éxito", result.info);
            productPhoto.src = result.info.secure_url;
        }
    });

    btnAgregarFoto.addEventListener("click", (e) => {
        e.preventDefault();
        widget_cloudinary.open();
    }, false);

    btnEliminar.addEventListener("click", (e) => {
        e.preventDefault();
        productPhoto.src = "";
    });

    addProduct.addEventListener("click", (e) => {
        e.preventDefault();

        const productName = document.getElementById('productName').value.trim();
        const productDescription = document.getElementById('productDescription').value.trim();
        const productPrice = document.getElementById('productPrice').value.trim();
        const productImage = productPhoto.src;

        // Borra datos de validaciones
        alertValidacionesTexto.innerHTML = "";
        alertaValidaciones.classList.add("d-none");
        isValid = true;

       // Validaciones con expresiones regulares
        const nameValidation = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;  // nombres con caracteres especiales, acentos y demas de 3-30 caracteres
        const descriptionValidation = /^(?!.*(\w)\1{4})[0-9a-zA-ZÀ-ÿ\s]{10,200}$/; //descricion de 10 a 200 caracteres, letras, numeros, mayusculas y caratceres  especiales de escritura latina, no permite repetir caracteres 4 veces seguidas 
        const priceValidation = /^(0|[1-9]\d*)(\.\d{1,2})?$/;


        let mensajes = [];

        if (!nameValidation.test(productName)) {
            mensajes.push("El nombre del producto debe tener entre 3 y 30 carácteres.");
            isValid = false;
        }

        if (!descriptionValidation.test(productDescription)) {
            mensajes.push("La descripción del producto debe tener entre 10 y 200 carácteres.");
            isValid = false;
        }

        if (!priceValidation.test(productPrice)|| parseFloat(productPrice) < 0)  {
            mensajes.push("El precio ingresado no es correcto; solo se permiten números con hasta dos decimales.");
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

            // Crear el producto
            let producto = {   
                id: Date.now(), //brinda un id unico
                title: productName,
                description: productDescription,
                price: productPrice, 
                image: productImage,
               
            };
            
            datosProducto.push(producto);
            localStorage.setItem('productos', JSON.stringify(datosProducto));


            console.log(datosProducto);

            // Crear tarjetas de producto
            createCards(datosProducto);

            // Borra el formulario
            productForm.reset();
            productPhoto.src = "";
        }
    });
    //Se agrega a la función el data-id

    function createCards(products) {
        console.log(products.length);
        productsList.innerHTML = "";
        products.forEach(p => {
            console.log(p.id, p.title, p. description, p.price, p.image);
            productsList.insertAdjacentHTML("beforeend",
                `<div class="card" style="width: 18rem;" data-id="${p.id}"> 
                <img src=${p.image} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <p class="card-text">${p.description}</p>
                  <p class="card-text">${p.price}</p>                  
                  <a href="#" class="btn btn-primary btn-delete">Borrar producto</a>
                </div>
              </div>`
            ); //beforeend
        });//forEach
    
        // Agregar eventos de clic a los botones de borrar
        const deleteButtons = document.querySelectorAll(".btn-delete");
        deleteButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                const card = button.closest(".card");
                const productId = card.getAttribute("data-id");
                deleteProduct(productId);
            });
        });
    
}//function createCards

        function deleteProduct(id) {
        // Filtrar los productos para eliminar el producto con el id proporcionado
        datosProducto = datosProducto.filter(product => product.id != id);
        localStorage.setItem('productos', JSON.stringify(datosProducto));
        // Volver a crear las tarjetas de producto
        createCards(datosProducto);
        //recargar la lista de productos en productos.html
        window.location.reload();
        }//función borrar productos
        //Inicializa de nuevo la lista de productos una vez que se borro alguno
        createCards(datosProducto);
});//función borrar productos

