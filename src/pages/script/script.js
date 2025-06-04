// Pega o botão e o menu
const botaoMenu = document.getElementById('botaoMenu');
const menuLinks = document.getElementById('menuLinks');

// Quando clicar no hambúrguer, mostra ou esconde o menu
botaoMenu.onclick = function() {
  menuLinks.classList.toggle('mostrar');
};