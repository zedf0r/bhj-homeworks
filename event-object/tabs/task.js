const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content')

tab.forEach((element, index) => {
    element.addEventListener('click', function() {
        tab.forEach(tab => {
            tab.classList.remove('tab_active')
        })
        tabContent.forEach(item => {
            item.classList.remove('tab__content_active')
        })

        element.classList.add('tab_active')
        tabContent[index].classList.add('tab__content_active')
    })
});