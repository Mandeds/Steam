const botaoMenu = document.getElementById('botaoMenu');
const menuLinks = document.getElementById('menuLinks');

botaoMenu.onclick = function() {
  menuLinks.classList.toggle('mostrar');
};