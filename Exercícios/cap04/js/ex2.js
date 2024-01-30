const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)
    const taxa = permitida +(permitida*0.2)
    if (condutor <= permitida) {
        resp.innerText = `Sem Multa`
    } else if (condutor >= taxa) {
        resp.innerText = `Multa Grave`
    } else {
        resp.innerText = `Multa Leve`
    }
})