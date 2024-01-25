const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

//vetor global

const pacientes = [];

//botao adicionar

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  //verifica o nome
  const nome = frm.inPaciente.value;
  // add no vetor
  pacientes.push(nome);
  //variavel para concatenar pacientes
  let lista = "";
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  respLista.innerText = lista;
  //limpar dados
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});

//botao urgencia

frm.btUrgencia.addEventListener("click", () => {
  //verifica se o nome do paciente ta no form
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente");
    frm.inPaciente.focus();
    return;
  }

  const nome = frm.inPaciente.value;
  //add o paciente no inicio da lista
  pacientes.unshift(nome);
  let lista = "";
  //alterando a lista de pacientes
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  respLista.innerText = lista;
  //limpar dados
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});

// botao atender

frm.btAtender.addEventListener("click", () => {
  //verifica se tem paciente esperando
  if (pacientes.length == 0) {
    alert("Não tem pacientes");
    frm.inPaciente.focus();
    return;
  }
  //adicionar o paciente pro atendimento
  const atender = pacientes.shift();
  respNome.innerText = atender;

  //atualizar a lista
  let lista = "";
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  respLista.innerText = lista;
});
