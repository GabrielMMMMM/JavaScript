const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fucionario = frm.inNome.value.trim();

  const partes = fucionario.split(" ");
  const tam = partes.length;
  let email = "";
  for (let i = 0; i < tam - 1; i++) {
    email += partes[i].charAt(0);
  }
  email += partes[tam - 1] + "@empresa.com";

  resp.innerText = email.toLowerCase();
});
