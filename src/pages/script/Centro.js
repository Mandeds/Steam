const Esconder = document.getElementById('Esconder');
const Inicio = document.getElementById('Inicios');

Esconder.onclick = function() {
  Inicio.classList.toggle('mostrar');
};