const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  if (numero % 2 == 0) {
    resp.innerText = `${numero} é par`;
  } else if (numero == 1) {
    resp.innerText = `${numero} é ímpar`;
  } else {
    resp.innerText = `${numero} é ímpar`;
  }
});
// const verificar = numero%2 == 0 ? "Par":"Impar"
// outro jeito de fazer