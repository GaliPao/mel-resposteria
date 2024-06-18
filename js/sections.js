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
        >Contáctanos</a
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
        <nav class="navegacion">
          <div class="footer-seccion ubicacion">
            <h3>Ubicación</h3>
            <a class="footer-a" href="https://maps.app.goo.gl/YbSA9QZUciVZDmW1A">Pachuca</a>
          </div>
        </nav>
      </div>
      `
  );
});
