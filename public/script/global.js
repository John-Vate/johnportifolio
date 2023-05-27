let cardhome = document.querySelector(".cardhome")
let btnhome = document.querySelector(".home")
let btnskills = document.querySelector(".skills")
let btnproject = document.querySelector(".project")
let header = document.querySelector("header")
var btnheader = 0
let btnsale = document.querySelector(".sale")
let divsale = document.querySelector(".divsale")
let cardskills = document.querySelector(".cardskills")
let btndes = document.querySelector(".des")
let divdes = document.querySelector(".divdes")
let btnfront = document.querySelector(".frontEnd")
let divfront = document.querySelector(".divfront")
let btnleader = document.querySelector(".leadership")
let divleader = document.querySelector(".divleader")
//----------------------------header------------------------------------------

btnproject.addEventListener("click", ()=>{
    cardhome.style.width = "0"
    cardhome.style.border = "0"
    cardskills.style.borderWidth = "0px"
    cardskills.style.width = "0"
    nodiv()
})
btnskills.addEventListener("click", ()=>{
    cardhome.style.border = "0"
    cardhome.style.width = "0"
    cardskills.style.borderWidth = "1px"
    cardskills.style.width = "90%"
    nodiv()
    document.querySelector(".content").style.backgroundImage = "url(style/image2.png)"
})
btnhome.addEventListener("click", ()=>{
    cardhome.style.width = "1300px"
    cardhome.style.border = `1px solid var(--second)`
    cardskills.style.borderWidth = "0px"
    cardskills.style.width = "0"
    nodiv()
    document.querySelector(".content").style.backgroundImage = "url(style/m.png)"
})

//-----------------------------home--------------------------------------------

cardhome.addEventListener("mouseleave", ()=>{
    cardhome.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`
    cardhome.style.boxShadow = `0 0 40px black`
})
cardhome.addEventListener("mousemove", (event)=>{
    const cw = cardhome.offsetWidth
    const ch = cardhome.offsetHeight
    const x = cardhome.offsetLeft + ch/2
    const y = cardhome.offsetTop + cw/2
    const px = event.clientX - x
    const py = event.clientY - y

    const rx = 1*py/(ch/2)
    const ry = (-1)*1*px/(cw/2)

    const a = (-1)*rx*5
    const b = (-1)*ry*5

    cardhome.style.transform = `perspective(500px) rotateX(${rx}deg) rotateY(${ry}deg)`
    cardhome.style.boxShadow = `${a}px ${b}px 40px black`
})

//---------------------------skills-----------------------------------------------

btnsale.addEventListener("click", ()=>{
    nodiv()
    divsale.style.width = "350px"
    divsale.style.borderWidth = "1px"
})
btndes.addEventListener("click", ()=>{
    nodiv()
    divdes.style.width = "300px"
    divdes.style.borderWidth = "1px"
})
btnfront.addEventListener("click", ()=>{
    nodiv()
    divfront.style.width = "550px"
    divfront.style.borderWidth = "1px"
})
btnleader.addEventListener("click", ()=>{
    nodiv()
    divleader.style.width = "350px"
    divleader.style.borderWidth = "1px"
})

function nodiv(){
    divsale.style.width ="0"
    divsale.style.borderWidth = "0"
    divfront.style.width = "0"
    divfront.style.borderWidth = "0"
    divleader.style.width = "0"
    divleader.style.borderWidth = "0"
    divdes.style.width = "0"
    divdes.style.borderWidth = "0"
    
}