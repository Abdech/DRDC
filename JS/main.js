const links = document.querySelector('.links')
const li = document.querySelectorAll('.links > li')
const burger = document.querySelector('.burger')
const divBur = document.querySelectorAll('.burger > div')


burger.addEventListener('click', () => {
 links.classList.toggle('mobile-nav')
// Animate links
    li.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7  + .6}s `
        }
    })
    //Burger Animation
    burger.classList.toggle('toggle')
    if(burger.classList.contains('toggle')){
    //     divBur.forEach(e =>{
    //         // e.style.background = "red";
    //     })
    // }else{
    //     divBur.forEach(e =>{
    //         e.style.background = "";
    //     })
    }

})