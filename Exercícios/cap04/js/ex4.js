const frm = document.querySelector("form");
const resp1 = document.querySelector("#inTriangulo");
const resp2 = document.querySelector("#inTipo");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  //Variaveis Iniciais
  const ladoA = Number(frm.inA.value);
  const ladoB = Number(frm.inB.value);
  const ladoC = Number(frm.inC.value);

  //Variaveis de Soma
  const somaAB = ladoA + ladoB;
  const somaAC = ladoA + ladoC;
  const somaBC = ladoB + ladoC;

  //Verficar se é possivel ter um triangulo
  if (ladoC > somaAB || ladoB > somaAC || ladoA > somaBC) {
    resp1.innerText = `Não é possivel fazer um triângulo`;
    resp2.innerText = " ";
    //Verificar o tipo do Trinangulo
  } else if (ladoA == ladoB && ladoB == ladoC) {
    resp1.innerText = `Lados podem formar um triângulo`;
    resp2.innerText = `Tipo: Equilátero`;
  } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
    resp1.innerText = `Lados podem formar um triângulo`;
    resp2.innerText = `Tipo: Isósceles`;
  } else if (ladoA != ladoB && ladoB != ladoC) {
    resp1.innerText = `Lados podem formar um triângulo`;
    resp2.innerText = `Tipo: Escaleno`;
  }
});
