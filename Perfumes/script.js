
//load more
const loadMore=document.querySelector('.more')
const moreItems=document.querySelectorAll('template')
let i=0
loadMore.addEventListener('click',()=>{
    moreItems[i].outerHTML=moreItems[i].innerHTML
    i++
})


