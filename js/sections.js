document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("#navbar-example2");
  const footer = document.querySelector("#footer");

  nav.insertAdjacentHTML(
    "beforeend",
    `<div style="display: flex; align-items: center; margin: 0; padding: 0">
<a href="./index.html" style="display: inline-block">
  <img
    src="./src/fotos-team/logo.png"
    alt="Logo de Mel Repostería"
    width="50"
    style="border-radius: 50%; margin-right: 20px"
  />
</a>
<div style="margin-left: 10px">
  <h4 style="margin-bottom: 0; margin-top: 0; padding-top: 0">
    Mel Repostería
  </h4>
  <p style="margin: 0; margin-top: 0; margin-bottom: 0">
    ¡Las mejores galletas artesanales!
  </p>
</div>
</div>

<ul class="nav nav-pills">
<li class="nav-item dropdown" style="padding-left: 85px">
  <a
    class="nav-link dropdown-toggle badge custom-btn-color1"
    data-bs-toggle="dropdown"
    href="#"
    role="button"
    aria-expanded="false"
  >
    <span class="badge custom-btn-color1">Menu</span>
  </a>

  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="#scrollspyHeading3">Inicio</a>
    </li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li>
      <a class="dropdown-item" href="#scrollspyHeading5">Login</a>
    </li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li>
      <a class="dropdown-item" href="#scrollspyHeading5">Carrito</a>
    </li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li>
      <a class="dropdown-item" href="#scrollspyHeading5"
        >Contactanos</a
      >
    </li>
  </ul>
</li>
</ul>`
  );

  footer.insertAdjacentHTML(
    "beforeend",
    `
  <div class="barra">
        <a class="logo" href="#">
          <img src="./src/fotos-team/logo.png" alt="logo mel reposteria" />
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
