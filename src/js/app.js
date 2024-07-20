document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar')
    navbar.innerHTML=`
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>`;

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const local ={
        'topo': header,
        'baixo':footer
    }


    function alteraNav(){
        const nav = innerWidth < 600 ? local['baixo'] : local['topo']
        nav.appendChild(navbar);
    }
    window.addEventListener('resize', alteraNav)
    
    alteraNav()
});
