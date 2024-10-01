const rotator = document.querySelectorAll('.rotator');


rotator.forEach((item) => {
    const rotatorCase = item.querySelectorAll('.rotator__case')
    let currentIndex = 0;

    function rotatorItems() {
        rotatorCase.forEach((element) => {
            element.classList.remove('rotator__case_active');
        })
        currentIndex = (currentIndex + 1) % rotatorCase.length;
        rotatorCase[currentIndex].classList.add('rotator__case_active');
        const speed = rotatorCase[currentIndex].getAttribute('data-speed');
        const color = rotatorCase[currentIndex].getAttribute('data-color');
        rotatorCase[currentIndex].style.color = color;
        setTimeout(rotatorItems, speed)
    }
    setTimeout(rotatorItems, rotatorCase[currentIndex].getAttribute('data-speed'))
    
})


