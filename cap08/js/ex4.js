//pega os dados da pag
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
//vetor global
const item = [];
//botao pra aparecer as bebidas
frm.rbPizza.addEventListener("click", () => {
  frm.inPizza.className = "aparece";
  frm.inBebida.className = "oculta";
});
frm.rbBebida.addEventListener("click", () => {
  frm.inPizza.className = "oculta";
  frm.inBebida.className = "aparece";
});
//mostra quantos itens tem disponivel dependendo do produto
frm.inDetalhes.addEventListener("focus", () => {
  if (frm.rbPizza.checked) {
    const pizza = frm.inPizza.value;

    const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
    frm.inDetalhes.placeholder = `Até ${num} sabores.`;
  }
});
frm.inDetalhes.addEventListener("blur", () => {
  frm.inDetalhes.placeholder = "";
});

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  let produto;
  if (frm.rbPizza.checked) {
    const num = frm.                              inPizza.selectedIndex;
    produto = frm.inPizza.options[num].text;
  } else if (frm.rbBebida.checked) {
    const num = frm.inBebida.selectedIndex;
    produto = frm.inBebida.options[num].text;
  }
  const detalhes = frm.inDetalhes.value;
  item.push(produto + " (" + detalhes + ")");
  resp.innerText = item.join("\n");

  frm.reset();
  frm.rbPizza.dispatchEvent(new Event("click"));
});
