const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value;
  const masculino = frm.inMasculino.checked;
  const altura = Number(frm.inAltura.value);
  let peso;
  if (masculino) {
    peso = 22 * altura ** 2;
    resp.innerText = `${nome}, o seu peso ideal é de: ${peso.toFixed(3)}Kg`;
  } else {
    peso = 21 * altura ** 2;
    resp.innerText = `${nome}, o seu peso ideal é de: ${peso.toFixed(3)}Kg`;
  }
  e.preventDefault();
});

frm.addEventListener("reset", () => {
    resp.innerText = ""
})