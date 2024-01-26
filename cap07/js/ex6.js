const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const senha = frm.inSenha.value;
  const erros = [];

  if (senha.length < 8 || senha.length > 15) {
    erros.push("Senha Inválida! A senha deve conter entre 8 a 15 caracteres.");
  }
  if (!senha.match(/[0-9]/g)) {
    erros.push("Senha inválida! A senha deve ter pelo menos 1 número.");
  }
  if (!senha.match(/[a-z]/g)) {
    erros.push(
      "Senha inválida! A senha deve ter pelo menos 1 letras minúsculas."
    );
  }
  if (senha.match(/[A-Z]/g) < 2) {
    erros.push("Senha inválida! A senha deve ter 2 letras maiúsculas.");
  }
  if (!senha.match(/[\W]/g)) {
    erros.push("Senha inválida! A senha deve ter 1 caractere especial.");
  }

  if (erros.length == 0) {
    resp.innerText = "Senha Válida!";
  } else {
    resp.innerText = `Erros... ${erros.join(", ")}`;
  }
});
