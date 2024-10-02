const visibleBlock = document.querySelectorAll('.reveal')

visibleBlock.forEach((element) => {
    document.addEventListener('scroll', function() {
        const {top, bottom} = element.getBoundingClientRect();
    
        if (bottom < 0) {
            return element.classList.remove('reveal_active')
        }
    
        if (top > innerHeight) {
            return element.classList.remove('reveal_active')
        }
    
        element.classList.add('reveal_active')
    })
})
