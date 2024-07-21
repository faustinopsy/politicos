import  {card} from '../componentes/cards.js'
import  {blocoText} from '../componentes/blocoText.js'
const texto1={
    titulo: "Sobre mim",
    paragrafo:"um teste de inserção dinamico, sou um dev web"
}

function homeComponente(){
    const main = document.querySelector('main')
    main.innerHTML='';
    main.appendChild(blocoText(texto1));
    main.appendChild(card());
    const img1 = document.getElementById('img1')
    setTimeout(()=>{
        img1.classList.add('revealed');
    },100)
}

export {homeComponente};