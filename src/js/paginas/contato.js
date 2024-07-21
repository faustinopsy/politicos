import {contatoForm} from '../componentes/contatoForm.js';
function contatoComponente() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(contatoForm());
    
    const formulario = document.querySelector('#formcontato')
    formulario.addEventListener('submit',(e)=>{
        e.preventDefault()
        const formData = new FormData(formulario);
        const values = Object.fromEntries(formData.entries());
        console.log(values.nome);
        console.log(values.email);
        console.log(values.mensagem);
    })
}

export {contatoComponente};