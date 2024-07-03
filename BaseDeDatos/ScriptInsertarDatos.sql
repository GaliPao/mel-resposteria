-- Script para agregar datos de clientes

INSERT INTO `melreposteria`.`clientes` (`Nombre`, `Email`, `Telefono`, `Direccion`, `Codigo postal`, `Calle y numero`, `Colonia`) VALUES ('Luis Leobardo Garcia Mejia', 'luis.l.g.mejia327@gmail.com', '5551466183', 'Genaro Salinas No 327, Fundidores Chimalhuacán, Edo Mex. ', '56334', 'Genaro Salinas  #327', 'Fundidores Chimalhuacán'),
('Karla Vanessa Gómez Hernández', 'vanessahernandez0106@gmail.com', '5562324819', 'Flor de María #68', '01760', 'Flor de María #68', 'Flor de María'),
('Carlos Eduardo Barrera Lopez', 'barreracarloseduardo03@gmail.com', '3321888124', '2ª Priv. José Reyes Martínez 109', '20030', '2ª Priv. José Reyes Martínez 109', 'Gremial'),
('Daniel', 'carlosdanielocanavega@gmail.com', '5588056426', 'Cda de la providencia 21-2', '10200', 'CDA de la providencia 21-2', 'San jeronimo lidice'),
('Melanie Ramirez', 'ramirezmelanie@hotmail.com', '7717023039', 'Agricultura #909', '42030', 'Agricultura #909', 'Rojo Gomez');

-- Script para agregar datos de productos

INSERT INTO melreposteria.productos (Nombre, Precio, Descripcion) VALUES ('Curso Decoración estilo Acuarela', '250', 'Sumérgete en el emocionante universo de la decoración, donde aprenderás a transformar tus creaciones en auténticas obras de arte comestibles.'),
('Curso Decoración de personajes', '250', 'Aprende a decorar deliciosos postres con el divertido y colorido mundo de Bob Esponja y sus amigos.'),
('Curso Decoración de Catrinas', '250', 'Descubre la tradición mexicana mientras aprendes a crear hermosas decoraciones inspiradas en esta emblemática figura del Día de los Muertos.'),
('Curso Decoración de flores', '250', 'Aprende el apasionante arte de la decoración donde crearás exquisitas flores de azúcar y otros adornos florales para embellecer tus dulces creaciones y sorprender a tus seres queridos.'),
('Etiquetas Día de Muertos', '50', 'Archivo PDF Con 5 diseños diferentes de temporada\rIncluye diferentes medidas para etiquetas'),
('Etiquetas San Valentín', '50', 'Archivo PDF Con 5 diseños diferentes de temporada\rIncluye diferentes medidas para etiquetas'),
('Etiquetas Halloween', '50', 'Archivo PDF Con 5 diseños diferentes de temporada\rIncluye diferentes medidas para etiquetas'),
('Etiquetas 15 de Septiembre', '50', 'Archivo PDF Con 5 diseños diferentes de temporada\rIncluye diferentes medidas para etiquetas'),
('Etiquetas Día de las madres', '50', 'Archivo PDF Con 5 diseños diferentes de temporada\r Incluye diferentes medidas para etiquetas');


-- Script para agregar pedidos

INSERT INTO `melreposteria`.`Pedidos` ( `Total`, `Precio`, `Estatus`, `Direccion de envio`, `Calle y numero`, `Codigo postal`, `Colonia`) 
VALUES (350, 250, 'En proceso', 'Genaro Salinas No 327, Fundidores Chimalhuacán, Edo Mex.', 'Genaro Salinas #327', '56334', 'Fundidores Chimalhuacán'),
(150, 50, 'Entregado', 'Flor de María #68', 'Flor de María #68', '01760', 'Flor de María'),
(200, 50, 'En proceso', '2ª Priv. José Reyes Martínez 109', '2ª Priv. José Reyes Martínez 109', '20030', 'Gremial'),
(100, 50, 'Pendiente', 'Cda de la providencia 21-2', 'CDA de la providencia 21-2', '10200', 'San jeronimo lidice'),
(300, 250, 'En proceso', 'Agricultura #909', 'Agricultura #909', '42030', 'Rojo Gomez');


