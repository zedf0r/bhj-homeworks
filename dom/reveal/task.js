const visibleBlock = document.querySelector('.reveal');

document.addEventListener('scroll', function() {
    const { top, bottom } = visibleBlock.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    } 

    if (top > innerHeight) {
        return false;
    }

    return visibleBlock.classList.add('reveal_active')
})