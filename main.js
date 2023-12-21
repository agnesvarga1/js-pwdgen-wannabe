const nome = prompt(" Quale e la il tuo nome?");
const cNome = prompt("Quale e il tuo cognome?");
const favColor = prompt("Quale il tuo colore prferito?");
document.querySelector("#name").innerHTML = "Nome: " + nome;
document.querySelector("#lname").innerHTML = "Cognome: " + cNome;
document.querySelector("#color").innerHTML = "Colore preferito: " + favColor;
document.querySelector("h3").innerHTML =
  "pwd: " + nome + cNome + favColor + "23";
