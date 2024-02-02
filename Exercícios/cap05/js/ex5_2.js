const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let resposta = ""
    for (let i = 0; i != numero; i++){
        resposta += `${numero - i}, `
        if (numero - i == 1) { //da pra fazer colocando a variavel ate um número a menos e pra nao ter que colocar o if
            resposta += `0.`
        }
    }
    resp.innerText=resposta    
})
//let i = 0
//while(i!=0){
//  resposta +=`${numero - i }`
//  i++}

