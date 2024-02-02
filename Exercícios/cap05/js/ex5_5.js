const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")
const resp2 = document.querySelector("h3")
//variaveis globais
let resposta = " "
let valorTotal = 0
let numeroDeContas = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //variavis iniciais
    const nome = frm.inNome.value
    const valor = Number(frm.inValor.value)
    //acumulador e contador
    numeroDeContas++
    valorTotal += valor
    // Constrói a string de resposta com o nome e o valor formatado
    resposta = resposta + nome + "- R$: " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta} ---------------------------------`
    resp2.innerText = `${numeroDeContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`
    //limpa os campos
    frm.inNome.value = ""
    frm.inValor.value = ""
    //mantem o cursor no primeiro formulario
    frm.inNome.focus()
})