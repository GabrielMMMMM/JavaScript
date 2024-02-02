const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);

    let contador = true
    if (numero <= 1) {
        contador =false
    }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i == 0) {
        contador = false;
        break
    }
  }
  if (contador) {
    resp.innerText = `O número é primo`;
  } else {
    resp.innerText = `O número não é primo!`;
  }
});
