const scrollers = document.querySelectorAll('.scroller')

//ctrl+shift+P and then run 'emulate CSS prefers-reduced-motion: reduce' to test
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(scroller => {
        scrollers.setAttribute('data-animated', true)
    })
}