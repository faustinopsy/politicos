function blocoText(texto){
    const bloco = document.createElement('div')
    bloco.className= 'bloco'
    bloco.innerHTML = `
        <h4>${texto.titulo}</h4>
        <p>${texto.paragrafo}</p>
        <div class="highlight"></div>
        `
    return bloco
}
export {blocoText}