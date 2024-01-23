const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const numero = Number(frm.inRaiz.value);
  const raiz = Math.sqrt(numero);
  const verificacao = raiz - Math.floor(raiz); //tem como fazer com isInterger tbm
  if (verificacao == 0) {
    resp.innerText = `O resultado é: ${raiz}`;
  } else {
    resp.innerText = `O número ${numero} não tem um quadrado perfeito.`;
  }
  e.preventDefault();
});
