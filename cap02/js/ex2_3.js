const frm = document.querySelector("form");
const preco = document.querySelector("#form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const modelo = frm.inModelo.value;
  const preco = Number(frm.inPreco.value);
  const entrada = preco / 2;
  const parcelas = entrada / 12;

  resp.innerText = `SUPER PROMOÇÃO \nEntrada: R$${entrada.toFixed(
    2
  )}. \n+12 vezes de ${Math.ceil(parcelas)} reais.`;
  e.preventDefault();
});
