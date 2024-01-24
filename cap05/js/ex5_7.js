const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    
    let estrelas = ""

    for (let i = 1; i <= numero; i++)
        if (i % 2 == 0) {
            estrelas = estrelas + "-"
        } else {
            estrelas = estrelas + "*"
        }    
    
    resp.innerText = estrelas
}
)