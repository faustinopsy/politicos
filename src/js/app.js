import {navbar} from './componentes/navbar.js';
document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const navBar = navbar()
    const local ={
        'topo': header,
        'baixo':footer
    }

    function alteraNav(){
        const nav = innerWidth < 600 ? local['baixo'] : local['topo']
        nav.appendChild(navBar);
    }
    window.addEventListener('resize', alteraNav)
    
    alteraNav()
});
