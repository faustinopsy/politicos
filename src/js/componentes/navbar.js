function navbar(){
    const nav = document.createElement('nav');
    nav.classList.add('navbar')
    nav.innerHTML=`
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>`;
    return nav;
}
export {navbar};