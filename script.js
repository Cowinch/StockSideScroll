const scrollers = document.querySelectorAll('.scroller')

//ctrl+shift+P and then run 'emulate CSS prefers-reduced-motion: reduce' to test
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation()
}

function addAnimation(){
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true)
        console.log(scroller)

        const scrollerInner = scroller.querySelector('.scroller-inner')
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true)
            //aria-hidden prevents screen readers from reading the scroller twice
            duplicatedItem.setAttribute('aria-hidden', true)
            scrollerInner.appendChild(duplicatedItem)
        })
    })
}