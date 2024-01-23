const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
  const numero = Number(frm.inNumero.value);
  if (numero < 100 || numero >= 1000) {
    alert(`Digite um número enter 100 e 1000`);
    frm.inNumero.focus();
    return;
  } else {
    const num1 = Math.floor(numero / 100);
    const sobra = numero % 100;
    const num2 = Math.floor(sobra / 10);
    const num3 = sobra % 10;

    resp.innerText = `O número ${numero} ao contrario é ${num3}${num2}${num1}`;
  }
});
