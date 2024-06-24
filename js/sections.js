document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#navbar-example2");
  const footer = document.querySelector("#footer");
  const nav2 = document.querySelector("#navbar-header");

  /* INSERCION DE LA SECCION HEADER  MEDIANTE  CODIGO JS Y LA FUNCION insertAdjacentHTML */
  try {
      nav2.insertAdjacentHTML(
          "beforeend", `
<<<<<<< HEAD
      <div>
=======
       <div>
>>>>>>> ab1272a8f2501a04a000c71fb088ca833ce1b0a0
          <nav class="navbar fixed-top navbar-expand-sm bg-body-tertiary"> 
              <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                      <img src="./src/fotos-team/logo.png" class="logo">
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content" id="navbarNavDropdown"> 
                      <ul class="navbar-nav me-auto">
                          <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="index.html">Inicio</a> 
                          </li>
                          <li class="nav-item me-auto">
                              <a class="nav-link" href="productos.html">Cursos</a> 
                          <li class="nav-item">
                              <a class="nav-link" href="productos.html#cards-etiquetas">Etiquetas</a> 
                          </li>
                          <li class="nav-item me-auto">
                              <a class="nav-link" href="contactanos.html">Contáctanos</a>
                          </li>
                          <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                  Acerca de Nosotros
                              </a>
<<<<<<< HEAD
                              <ul class="dropdown-menu">
=======
                              <ul class="dropdown-menu">   
                                  <li><a class="dropdown-item" href="productsForm.html">Mel reposteria</a></li>
>>>>>>> ab1272a8f2501a04a000c71fb088ca833ce1b0a0
                                  <li><a class="dropdown-item" href="acerca.html">Cookie Coding</a></li>
                              </ul>
                                    
                                  </li>
                              </ul>
                          </li>
                      </ul>
                            <ul class="navbar-nav flew-row flex-wrap navbar-icons">
                                  <li class="nav-item">
                                        <a class="nav-link" href="login-registro.html">
                                          <img src="./src/Iconos/usuario.png" alt="usuario">
                                      </a>
                                  </li>
                            <ul class="navbar-nav flew-row flex-wrap navbar-icons">
                                  <li class="nav-item">
                                     <a class="nav-link" href="carrito.html"> 
                                          <img src="./src/Iconos/bolsa.png" alt="carrito">
                                      </a>
                                  </li>
                            </ul>
                  </div>
              </div>
          </nav>
      </div>  
  `
      );
  } catch (ex) {
      console.log("ocurrio un error al insertar el html " + ex);
  }

  /* INSERCION DE LA SECCION FOOTER  MEDIANTE  COIGO JS Y LA FUNCION insertAdjacentHTML */
  footer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="barra">
      <a class="logo" href="#">
        <img src="./src/Iconos/oso.png" alt="logo mel reposteria" />
      </a>
      <ul class="navbar-nav navbar-icons">
        <div class="seccion ubicacion">
          <h3>Ubicación</h3>
          <a href="#">Pachuca</a>
        </div>
      </nav>
    </div>
    `
  );
});
