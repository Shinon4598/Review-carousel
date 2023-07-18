let review = document.getElementById("review");
let actual= 0;
let testimoniosData;
fetch('/assets/js/testimonios.json')
  .then(response => response.json())
  .then(data => {
    testimoniosData = data;
    mostrarTarjeta();
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
function mostrarTarjeta(){
    let imagen = document.getElementById("imagen-review");
    imagen.src = `/assets/img/imagen${actual}.jpeg`;
    let nombre = document.getElementById("nombre-review");
    nombre.textContent= testimoniosData[actual].nombre;
    let testimonio = document.getElementById("testimonio-review");
    testimonio.textContent = testimoniosData[actual].testimonio;
}
function carrusel(next) {
  actual= next ? actual + 1 : actual-1;
  actual= actual < 0? actual = 6 : actual;
  actual = actual % 7;
  mostrarTarjeta()
  console.log(actual);
}
function reviewAleatorio() {
  actual = Math.floor(Math.random() * 7);
  mostrarTarjeta()
}

