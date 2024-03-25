//pegar dados da pag
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outModelo");
const resp2 = document.querySelector("#outEntrada");
const resp3 = document.querySelector("#outParcela");
//botao enviar
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  //variaveis inicias
  const modelo = frm.inModelo.value;
  const ano = Number(frm.inAno.value);
  const preco = Number(frm.inPreco.value);
  //chamando a funcao
  const classificao = classificaVeiculo(ano);
  const entrada = calcularEntrada(classificao, preco);
  const parcela = (preco - entrada) / 10;
  //respostas
  resp1.innerText = `${modelo} - ${classificao}`;
  resp2.innerText = `Entrada: ${entrada.toFixed(2)}`;
  resp3.innerText = `Parcelas +10 de ${parcela.toFixed(2)}`;
});

//primeira funcao pra ver o status do carro
const classificaVeiculo = (ano) => {
  const anoAtual = new Date().getFullYear();
  let classif;
  if (ano == anoAtual) {
    classif = "Novo";
  } else if (ano == anoAtual - 2 || ano == anoAtual - 1) {
    classif = "Semi-novo";
  } else {
    classif = "Usado";
  }
  return classif;
};

//fazer a conta da entra    
const calcularEntrada = (status, preco) =>
  status == "Novo" ? preco * 0.5 : preco * 0.3;
