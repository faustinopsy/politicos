function card(){
    const card = document.createElement('div')
    card.id='img1'
    card.className= 'card'
    card.innerHTML = `
        <div class="content">
        <div class="highlight"></div>
        </div>`
    return card
}
export {card}