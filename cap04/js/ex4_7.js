const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const pessoas = Number(frm.inPessoas.value)
    const peixes = Number(frm.inPeixes.value)
    let pagar
    if (pessoas >= peixes) {
        pagar = pessoas*20
        resp.innerText = `Paque ${pagar} reais!`
    } else {
        pagar = (pessoas*20) + ((peixes - pessoas) * 12)
        resp.innerText = `Pague ${pagar} reais!`
    }
    
})