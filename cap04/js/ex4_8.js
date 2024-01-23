const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const total = Number(frm.inCompra.value);
  const parcelas = Math.floor(total / 20); //tem como fazer melhor
  if (parcelas > 6) {
    resp.innerText = `O produto não pode ser parcelado`;
  } else {
    const valorParcela = total / parcelas;
    resp.innerText = `O produto pode ser parcelado em ${parcelas}
     vezes, por apenas R$ ${valorParcela.toFixed(2)} por mês.`;
  }
});
