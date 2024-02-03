const frm = document.querySelector("form")
const resp1 = document.querySelector(".outResp1")
const resp2 = document.querySelector(".outResp2")
const resp3 = document.querySelector("#outDica")

//variaveis globais

const erros = []
const sorteado = Math.floor(Math.random()*100) +1
const chances = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    //caso acerte
    if (sorteado == numero) {
        resp3.innerText = `Parabéns!! Você acertou!`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"  
    } else {
    //caso erre    
        if (erros.includes(numero)){
            alert("Você Já jogou esse número tente outro!")
        } else {    
            erros.push(numero)
            const numErros = erros.length
            const numChances = chances - numErros
            // mostrar número de erros, votor e número de chances
            resp1.innerText = `${numErros} (${erros.join(", ")})`
            resp2.innerText = numChances
            if (numChances == 0) {
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                resp3.innerText =`Perdeu! Número Sorteado:${sorteado}`
            } else {
                //dica se o número é maior ou menor
                const dica = numero < sorteado ? "Maior" : "Menor"
                resp3.innerText = `Dica: Tente um número ${dica} que  ${numero}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btNovo.addEventListener("click", () => {
    location.reload() //recarrega a pag
})

