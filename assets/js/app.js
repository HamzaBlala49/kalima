// selectors
let preLoader = document.querySelector('.preloader')
let navbar =document.querySelector('.mynavbar')
let linkNavbar =document.querySelectorAll('.mynavbar .links .link a')
let barIcon =document.querySelector('.bar-icon')
let closeIcon =document.querySelector('.close-icon')
let sideBar = document.querySelector('.sidebar')
let social =document.querySelector('.social')
let copy =document.querySelector('.copy')


// start preLoader
window.addEventListener('load',()=>{
    preLoader.style.opacity =0;
    setTimeout(()=>{
        preLoader.style.display ='none';
    },2000)
})
// end preLoader
// start navbar
window.addEventListener('scroll',()=>{
    if(window.scrollY >= '200'){
        navbar.classList.add('nav-scroll')
        linkNavbar.forEach(el =>{
            el.classList.add("nav-scrollColor")
        })
    }else{
        navbar.classList.remove('nav-scroll')
        linkNavbar.forEach(el =>{
            el.classList.remove("nav-scrollColor")
        })
    }

    if(window.scrollY>='580'){
        social.style.transform='translateX(0px)';
    }else{
        social.style.transform='translateX(-40px)';
    }
})
barIcon.onclick=(_=>{
    sideBar.style.display ='flex'
})
closeIcon.onclick=(_=>{
    sideBar.style.display ='none'
})
//end navber

// start copy
let date = new Date()
copy.innerHTML = date.getFullYear()
// end copy