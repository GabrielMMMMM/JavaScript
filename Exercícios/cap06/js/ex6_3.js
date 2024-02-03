//pegando dados da pag
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

//variaveis globais

const carros = [];

//botao add
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  //pegar informacoes
  const modelo = frm.inModelo.value;
  const preco = Number(frm.inPreco.value);
  //add informacoes no vetor
  carros.push({ modelo, preco });
  //limpar dados
  frm.inModelo.value = "";
  frm.inPreco.value = "";
  frm.inModelo.focus();
  //acontece assim que o bodao add for apertado
  frm.btListar.dispatchEvent(new Event("click"));
});

//botao listar
frm.btListar.addEventListener("click", () => {
  //verificar se tem carros no vetor
  if (carros.length == 0) {
    alert("Não temos itens no sistema");
  }
  //fazer aparecer
  const lista = carros.reduce(
    (acumulador, carro) =>
      acumulador +
      carro.modelo +
      `- R$: ` +
      carro.preco.toFixed(2) +
       
      `\n`,
    ""
  );
  resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;
});

//botao Filtrar
frm.btFiltrar.addEventListener("click", () => {
  const max = Number(prompt("Qual é o valor máximo que vc quer pagar?"));

  //verificar se o valor e compativel
  if (max == 0 || isNaN(max)) {
    return;
  }
  //mostrar dados
  const listaFiltro = carros.filter((num) => num.preco <= max);
  if (listaFiltro.length == 0) {
    alert("Não há carros com preço inferior ou igual ao solicitado");
    return;
  }
  let lista = "";
  for (const carro of listaFiltro) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros até R$${max.toFixed(2)}\n${"-".repeat(
    40
  )}\n${lista}`;
});

//botao Promoção

frm.btSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Qual é o precentual de desconto: "));
  if (desconto == 0 || isNaN(desconto)) {
    return;
  }
  const carrosDesc = carros.map((aux) => ({
    modelo: aux.modelo,
    preco: aux.preco - (desconto / 100) * aux.preco,
  }));
  let lista = "";
  for (const carro of carrosDesc) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resp.innerText = `Carros com desconto:${desconto}%\n${"-".repeat(
    40
  )}\n${lista}`;
});
