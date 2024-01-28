// pega as informacoes 
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// toda vez que apertar o botao acontece isso
frm.addEventListener("submit", (e) => {
    const kg = Number(frm.inBuffet.value)
    const consumo = Number(frm.inConsumo.value)
    const convertor = kg / 1000 //converter em gramas
    const preco = convertor * consumo //mostra o valor
    
    resp.innerText = `Valor a Pagar: R$ ${preco.toFixed(2)}`
    e.preventDefault(  )
})
