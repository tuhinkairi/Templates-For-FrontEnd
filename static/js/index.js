const full_div_testimonials = document.getElementById('testimonials_container')
const slider_container_testimonials = document.getElementById('testimonials_slider')
let r_btn_t = document.getElementById('r_btn_t')
let l_btn_t = document.getElementById('l_btn_t')


counter =0
r_btn_t.addEventListener('click',()=>{
    console.log('right')
    let slider_full = slider_container_testimonials.scrollWidth
    let show_screen = full_div_testimonials.clientWidth
    counter = slider_full-show_screen
    // slider_container_testimonials.style.transform =`translateX(-${50}px)`
})
l_btn_t.addEventListener('click',()=>{
    console.log('left')
})


// small menu
const menu_btn = document.getElementById('menu_btn')
const menu = document.getElementById('menu')

menu_btn.addEventListener('click',()=>{
    menu.classList.toggle('translate-x-[-100vw]')
})
menu.addEventListener('mouseleave',()=>{
    menu.classList.toggle('translate-x-[-100vw]')
})