window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navigator.classList.add('sc')
    } else{
        navigator.classList.remove('sc')
    }
})