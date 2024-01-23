const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const saque = Number(frm.inSaque.value)
    if (saque % 10 != 0) {
        alert(`Valor inválido! Saque um valor múltiplo de dez.`)
        frm.inSaque.focus()
        return
    }
    const nota100 = Math.floor(saque / 100)
    let resto = saque % 100
    const nota50 = Math.floor(resto / 50)
    resto = saque % 50
    const nota10 = Math.floor( resto / 10)
    
    if (nota100 > 0) {
        resp1.innerText = `Notas de R$ 100: ${nota100}`
    }
    if (nota50 > 0) {
        resp2.innerText = `Notas de R$50: ${nota50}`
    }
    if (nota10 > 0) {
        resp3.innerText = `Notas de R$10: ${nota10}`
    }
    

})