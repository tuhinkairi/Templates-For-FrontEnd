const nav= document.getElementById('nav_bar')
const banner= document.getElementById('header_banner')

window.addEventListener('scroll', function() {
    const currentHeight = window.scrollY;
    const startingHeight = banner.clientHeight-nav.clientHeight;
    if (currentHeight > startingHeight) {
        nav.classList.add("bg-teal-600")
        nav.classList.remove("bg-transparent");
    } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-teal-600");
    }
  });
  

//   carousel
const c_section = document.getElementById("carousel")
const c_items = document.getElementsByClassName("carousel-item")

const l_btn = document.getElementById("left_btn")
const r_btn = document.getElementById("right_btn")

let counter =1
r_btn.addEventListener("click",()=>{
    console.log(counter)
    if( c_items.length>counter ){
        if (counter ==0) {
            counter =1
        }
        item_width = c_items[counter-1].clientWidth
        c_section.style.transform = `translateX(${-item_width*counter}px)`
        counter++;
    }
    else{
        counter=0;
        c_section.style.transform = `translateX(${-item_width*counter}px)`
        counter++;
    }
    console.log('end right->',counter)
})
l_btn.addEventListener("click",()=>{
    console.log('left',counter)
    if( c_items.length>counter & counter>0){
        console.info("if in left")
        item_width = c_items[counter-1].clientWidth
        c_section.style.transform = `translateX(${-item_width*counter}px)`
        counter--;
    }
    else{
        console.info("else in left")
        counter=c_items.length-1;
        c_section.style.transform = `translateX(${-item_width*counter}px)`
        counter--;
    }
    console.log('end left->',counter)
})