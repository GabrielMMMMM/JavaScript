// pega os elementos do html

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// adiciona um evento que no caso seria apertar o botao
frm.addEventListener("submit", (e) => {
  const nome = frm.inTitulo.value; // pega o valor la de cima
  const convertor = Number(frm.inMin.value); //pega o valor la de cima e converte pra min
  const horas = Math.floor(convertor / 60); //conta pra achar as horas
  const minutos = convertor % 60; // conta pra achar os minutos 
  resp.innerText = `Filme: ${nome} \nDuração: ${horas} h e ${minutos} m.`;
  e.preventDefault();
});
