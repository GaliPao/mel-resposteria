const nav = document.querySelector("#navbar-example2");
const footer = document.querySelector("#footer");
const nav2 = document.querySelector("#navbar-header");

document.addEventListener("DOMContentLoaded", function () {
  /* INSERCION DE LA SECCION HEADER  MEDIANTE  CODIGO JS Y LA FUNCION insertAdjacentHTML */
  try {
    nav2.insertAdjacentHTML(
      "beforeend",
      `
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
                                  <li><a class="dropdown-item" href="productsForm.html">Mel repostería</a></li>
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
                            <ul class="navbar-nav flew-row flex-wrap navbar-icons" id ="login-icons">
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
    console.log("Ocurrió un error al insertar el html " + ex);
  }

  /* INSERCION DE LA SECCION FOOTER  MEDIANTE  COIGO JS Y LA FUNCION insertAdjacentHTML */
  footer.insertAdjacentHTML(
    "beforeend",
    `
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3">
  <div class="col-md-4 d-flex align-items-center">
  <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
  <a class="footer-brand" href="#">
     <img src="./src/Iconos/oso.png" class="logo"> 
  </a>
  <span class="mb-3 mb-md-0 text-muted">Elaborado por @cookiecoding</span>
</div>

<ul class="nav col-md-4 justify-content-center list-unstyled">
  <li class="ms-3">
    <a class="text-muted" href="https://www.instagram.com/melreposteriamx/"> 
      <i class="bi bi-instagram"></i> <span>Instagram</span></a>
  </li>
  <li class="ms-3">
    <a class="text-muted" href="https://www.facebook.com/profile.php?id=100067550652660">
      <i class="bi bi-facebook"></i> <span>Facebook</span>
       <li class="ms-3">
    <a class="text-muted" href="https://wa.me/5217714758375">
      <i class="bi bi-whatsapp"></i> <span>Whatsapp</span>
  `
  );
  // Consiguiendo nombre
  const llave = "usuarios";
  const valor = localStorage.getItem(llave);
  const registro = JSON.parse(valor);
  const nombreUsuario = registro[0].nombre;
  const logIcons = document.getElementById("login-icons");
  const divNuevo = document.createElement("div");
  if (valor) {
    divNuevo.innerHTML = `<div class="bienvenidoSeccion"> <p class="bienvenidosP">Bienvenido ${nombreUsuario} 🐻</p> 
        <button type="button" class="btn btn-danger" id="cerrarSesionBtn">
          Cerrar sesión
        </button>
        </div>
     `;
    logIcons.appendChild(divNuevo);
  }
  function deleteData() {
    localStorage.removeItem("usuarios");
  }

  //////Cerrar sesión//////////

  cerrarSesionBtn.addEventListener("click", () => {
    divNuevo.innerHTML = `Nos vemos pronto ${nombreUsuario}! 🍪 `;
    deleteData();
    setTimeout(() => {
      // redireccionar a la página principal
      window.location.href = "index.html";
    }, 3000);
  });
});