import {navbar} from './componentes/navbar.js';
import {homeComponente} from './paginas/home.js';
import {servicosComponente} from './paginas/servicos.js';
import {contatoComponente} from './paginas/contato.js';
document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const navBar = navbar()
    const local ={
        'topo': header,
        'baixo':footer
    }
    const componentes = {
        'home': homeComponente,
        'servicos': servicosComponente,
        'contato': contatoComponente
    };
    function alteraNav(){
        const nav = innerWidth < 600 ? local['baixo'] : local['topo']
        nav.appendChild(navBar);
    }
    function verificaUrl() {
        const hash = window.location.hash.slice(1) || 'home';
        const renderComponent = componentes[hash];
        if (renderComponent) {
            renderComponent();
        }
    }
    window.addEventListener('resize', alteraNav)
    window.addEventListener('hashchange',verificaUrl)
    alteraNav()
    verificaUrl()
});
