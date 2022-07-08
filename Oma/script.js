
//load more
const loadMore=document.querySelector('.more')

const moreItems=document.querySelectorAll('template')
let i=0
loadMore.addEventListener('click',()=>{
    moreItems[i].outerHTML=moreItems[i].innerHTML
    i++
})

//theme
const htmlEl = document.getElementsByTagName('html')[0];

const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
}


const card=document.querySelector('.card')
const main=document.querySelector('main')

// card.addEventListener('click',(e)=>{
//     card.classList.toggle('active')     
// })

