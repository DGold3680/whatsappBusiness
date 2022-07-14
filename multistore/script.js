const btn=document.querySelectorAll('.btn')
const bags=document.querySelector('.bags')
const dresses=document.querySelector('.dresses')
const slides=document.querySelector('.slides')
const tops=document.querySelector('.tops')
const jewels=document.querySelector('.jewels')
const showPage=document.querySelector('main')
function white(){
    if(showPage.style.backgroundColor!='white')
    {showPage.style.backgroundColor='white'}}

function clickbtn(no,item){
    btn[no].addEventListener('click',()=>{
        white()
          item.classList.toggle('hide')
        })
}
clickbtn(0,bags)
clickbtn(1,dresses)
clickbtn(2,slides)
clickbtn(3,tops)
clickbtn(4,jewels)



//load more
function load(item){
    const loadMore=document.querySelector(`.${item}>.more`)
const moreItems=document.querySelectorAll(`.${item}>template`)
let i=0
loadMore.addEventListener('click',()=>{
    moreItems[i].outerHTML=moreItems[i].innerHTML
    i++
})
}
load('bags')
load('dresses')
load('slides')
load('tops')
load('jewels')



