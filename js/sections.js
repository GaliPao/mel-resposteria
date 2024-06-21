document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#navbar-example2");
  const footer = document.querySelector("#footer");
  const nav2 = document.querySelector("#navbar-header");

  /* INSERCION DE LA SECCION HEADER  MEDIANTE  CODIGO JS Y LA FUNCION insertAdjacentHTML */
  try {
      nav2.insertAdjacentHTML(
          "beforeend", `
       <div>
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
                              <ul class="dropdown-menu">   
                                  <li><a class="dropdown-item" href="productsForm.html">Mel reposteria</a></li>
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

      <nav class="navegacion">
        <div class="seccion conocenos">
          <h3>Conócenos</h3>
          <a href="./acerca.html">Acerca de nosotros</a>
        </div>

        <div class="seccion redes-sociales">
          <h3>Redes sociales</h3>
          <a href="https://www.instagram.com/melreposteriamx/">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=100067550652660">Facebook</a>
        </div>

        <div class="seccion cursos">
          <h3>Cursos</h3>
          <a href="#">Decoración de flores</a>
        </div>

        <div class="seccion contacto">
          <h3>Contacto</h3>
          <a href="./contactanos.html"> Contáctanos</a>
          <a href="./contactanos.html">Cotizaciones</a>
        </div>

        <div class="seccion mi-cuenta">
          <h3>Mi cuenta</h3>
          <a href="#">Iniciar sesión</a>
          <a href="#">Registrarse</a>
        </div>

        <div class="seccion ubicacion">
          <h3>Ubicación</h3>
          <a href="#">Pachuca</a>
        </div>
      </nav>
    </div>
    `
  );
});
