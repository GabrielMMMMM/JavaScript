const frm = document.querySelector("form");
const resp = document.querySelector("pre");

//vetor global
const criancas = [];

//botao add
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.querySelector("#inNome").value;
  const idade = Number(frm.querySelector("#inIdade").value);
  criancas.push({ nome, idade });
  frm.reset();
  frm.querySelector("#inNome").focus();
  frm.querySelector("#btListar").dispatchEvent(new Event("click"));
});

//botao listar
frm.querySelector("#btListar").addEventListener("click", () => {
  if (criancas.length === 0) {
    alert("Não tem crianças adicionadas!");
    return;
  } else {
    let lista = "";
    for (const crianca of criancas) {
      const { nome, idade } = crianca;
      lista += nome + " - " + idade + " anos\n";
    }
    resp.innerText = lista;
  }
});

//botao resumir
frm.querySelector("#btResumir").addEventListener("click", () => {
  if (criancas.length === 0) {
    alert("Não tem crianças adicionadas!");
    return;
  }
  const copia = [...criancas];
  copia.sort((a, b) => a.idade - b.idade); //ordena pela idade
  let resumo = "";
  let aux = copia[0].idade; //menor idade do vetor
  let nomes = []; //para inserir nomes de cada idade

  for (const crianca of copia) {
    const { nome, idade } = crianca;    if (idade === aux) {
      nomes.push(nome); // se for a menor idade add no vetor
    } else {
      // senao monta a resposta
      resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
      resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
      resumo += "(" + nomes.join(", ") + ")\n\n";
      aux = idade;
      nomes = [];
      nomes.push(nome);
    }
  }
  //adiciona a última criança
  resumo += aux + " anos(s): " + nomes.length + " criança(s) - ";
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ") \n\n";
  resp.innerText = resumo;
});
