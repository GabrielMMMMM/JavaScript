const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let tabuada =""
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} X ${i} = ${numero * i}\n`
    }
        resp.innerText = tabuada    
})