const frm = document.querySelector("form"); //pega as informacoes do forms

const taxaMulta = 2 / 100; // taxa de juros e multa
const taxaJuros = 0.33 / 100;

frm.addEventListener("submit", (e) => { 
  e.preventDefault(); //nao envia o formulario
  const dataVencimento = frm.inVencimento.value; // variaveis inicias
  const valor = Number(frm.inValor.value);

  const hoje = new Date();
  const vencimento = new Date();

  const partes = dataVencimento.split("-"); // adiciona a data que venceu a a conta 
  vencimento.setDate(Number(partes[2]));
  vencimento.setMonth(Number(partes[1] - 1));
  vencimento.setFullYear(Number(partes[0]));

  const atraso = hoje - vencimento; // calcula o tempo do atraso
  let multa = 0;
  let juros = 0;

  if (atraso > 0) {
    const dias = atraso / 86400000; // converte o tempo em dias
    multa = valor * taxaMulta;
    juros = valor * taxaJuros * dias;
  }
  const totasl = valor + multa + juros;

  frm.outMulta.value = multa.toFixed(2); // exibe as respostas
  frm.outJuros.value = juros.toFixed(2);
  frm.outTotal.value = totasl.toFixed(2);
});
