window.addEventListener("scroll", function(){
    let menu = document.getElementById('menu')
    menu.classList.toggle('menu-fixed', window.scrollY>0)
})


