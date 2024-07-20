function navbar(){
    const nav = document.createElement('nav');
    nav.classList.add('navbar')
    nav.innerHTML=`
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>`;
    return nav;
}
export {navbar};