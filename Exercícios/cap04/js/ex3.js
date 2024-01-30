const frm = document.querySelector("form");
const resp1 = document.querySelector("#inTempo");
const resp2 = document.querySelector("#inTroco");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = Number(frm.inValor.value);
  let troco;
  if (valor >= 1 && valor < 1.75) {
    troco = valor - 1;
    resp1.innerText = `Tempo: 30 min`;
    if (troco != 0) {
      resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
  }
  if (valor >= 1.75 && valor < 3) {
    troco = valor - 1.75;
    resp1.innerText = `Tempo: 60 min`;
    if (troco != 0) {
      resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
  }
  if (valor >= 3) {
    troco = valor - 3;
    resp1.innerText = `Tempo: 120 min`;
    if (troco != 0) {
      resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }
  }
});
