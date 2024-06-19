// document.addEventListener("DOMContentLoaded", function () {
//   const nav = document.querySelector("#navbar-example2");
//   const footer = document.querySelector("#footer");

// /* INSERCION DE LA SECCION HEADER  MEDIANTE  COIGO JS Y LA FUNCION insertAdjacentHTML */ 

// nav.insertAdjacentHTML(
//     "beforeend",
//     `<div style="display: flex; align-items: center; margin: 0; padding: 0">
// <a href="acerca.html" style="display: inline-block">
//   <img
//     src="./src/fotos-team/logo.png"
//     alt="Logo de Mel Repostería"
//     width="100px"
//     style="border-radius: 50%; margin-right: 20px"
//   />
// </a>
// <div style="margin-left: 10px">
//   <h4 style="margin-bottom: 0; margin-top: 0; padding-top: 0">
//     Mel Repostería
//   </h4>
//   <p style="margin: 0; margin-top: 0; margin-bottom: 0">
//     ¡Las mejores galletas artesanales!
//   </p>
// </div>
// </div>

// <ul class="nav nav-pills">
// <li class="nav-item dropdown" style="padding-left: 85px">
//   <a
//     class="nav-link dropdown-toggle badge custom-btn-color1"
//     data-bs-toggle="dropdown"
//     href="#"
//     role="button"
//     aria-expanded="false"
//   >
//     <span class="badge custom-btn-color1">Menú</span>
//   </a>

//   <ul class="dropdown-menu">
//     <li>
//       <a class="dropdown-item" href="./index.html">Inicio</a>
//     </li>
//     <li>
//       <a class="dropdown-item" href="acerca.html">Acerca de nosotros</a>
//     </li>
//     <li>
//       <hr class="dropdown-divider" />
//     </li>
//     <li>
//       <a class="dropdown-item" href="contactanos.html" >Contáctanos</a>
//     </li>
//     <li>
//       <hr class="dropdown-divider" />
//     </li>
//     <li>
//       <a class="dropdown-item" href="productos.html" >Productos </a>
//     </li>
//     <li>
//       <hr class="dropdown-divider" />
//     </li>
//     <li>
//       <a class="dropdown-item" href="curso1.html" >Cursos</a>
//     </li>
//   </ul>
// </li>
// </ul>`
//   );

// /* INSERCION DE LA SECCION FOOTER  MEDIANTE  COIGO JS Y LA FUNCION insertAdjacentHTML */ 
//   footer.insertAdjacentHTML(
//     "beforeend",
//     `
//   <div class="barra">
//         <a class="footer-logo" href="#">
//           <img src="./src/fotos-team/logo.png" alt="logo mel reposteria" />
//         </a>
  
//         <nav class="navegacion">
//           <div class="footer-seccion conocenos">
//             <h3>Conócenos</h3>
//             <a class="footer-a" href="./acerca.html">Acerca de nosotros</a>
//           </div>
  
//           <div class="footer-seccion redes-sociales">
//             <h3>Redes sociales</h3>
//             <a class="footer-a" href="https://www.instagram.com/melreposteriamx/">Instagram</a>
//             <a class="footer-a" href="https://www.facebook.com/profile.php?id=100067550652660">Facebook</a>
//           </div>
  
//           <div class="footer-seccion cursos">
//             <h3>Cursos</h3>

//             <a href="./productos.html">Cursos</a>
//           </div>
  
//           <div class="footer-seccion contacto">
//             <h3>Contacto</h3>
//             <a class="footer-a" href="./contactanos.html"> Contáctanos</a>
//             <a class="footer-a" href="./contactanos.html">Cotizaciones</a>
//           </div>
  
//           <div class="footer-seccion mi-cuenta">
//             <h3>Mi cuenta</h3>

//             <a class="footer-a" href="./iniciosesion.html">Iniciar sesión</a>
//             <a class="footer-a" href="./iniciosesion.html">Registrarse</a>

//           </div>
  
//           <div class="footer-seccion ubicacion">
//             <h3>Ubicación</h3>
//             <a class="footer-a" href="#">Pachuca</a>
//           </div>
//         </nav>
//       </div>
//       `
//   );
// });

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("#navbar-example2");
    const footer = document.querySelector("#footer");
    const nav2 = document.querySelector("#navbar-header");
  
    /* INSERCION DE LA SECCION HEADER  MEDIANTE  CODIGO JS Y LA FUNCION insertAdjacentHTML */
    try {
        nav2.insertAdjacentHTML(
            "beforeend", `
        <div>
            <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary"> 
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
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Inicio</a> 
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="productos.html">Cursos</a> 
                            <li class="nav-item">
                                <a class="nav-link" href="productos.html#cards-etiquetas">Etiquetas</a> 
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contactanos.html">Contáctanos</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Acerca de Nostros
                                </a>
                                <ul class="dropdown-menu">   
                                    <li><a class="dropdown-item" href="#">Mel reposteria</a></li>
                                    <li><a class="dropdown-item" href="acerca.html">Cookie Coding</a></li>
                                </ul>
                           
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <ul class="navbar-nav navbar-icons"> 
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://www.facebook.com/p/Mel-Reposter%C3%ADa-100067550652660/?locale=el_GR&paipv=0&eav=Afbh1Fsd0YBhODaqpBa_O35byl1if4K6lWPr6ym0saDPnqPKIvIt_Afg7N9TUsOFbHg&_rdr">
                                            <img src="./src/Iconos/facebook (3).png" alt="Facebook">
                                        </a>
                                    </li>
                    <ul class="navbar-nav navbar-icons">
                                    <li class="nav-item">
                                        <a class="nav-link" href="https://www.instagram.com/melreposteriamx/">
                                            <img src="./src/Iconos/instagram (1).png" alt="instagram">
                                        </a>
                                    </li>
                    <ul class="navbar-nav navbar-icons">
                                    <li class="nav-item">
                                          <a class="nav-link" href="login-registro.html">
                                            <img src="./src/Iconos/usuario.png" alt="usuario">
                                        </a>
                                    </li>
                    <ul class="navbar-nav navbar-icons">
                                    <li class="nav-item">
                                       <a class="nav-link" href="carrito.html"> 
                                            <img src="./src/Iconos/bolsa.png" alt="carrito">
                                        </a>
                                    </li>
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
  