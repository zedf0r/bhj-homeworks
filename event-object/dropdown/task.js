const container = document.querySelectorAll(".dropdown");

container.forEach(select => {
    const button = select.querySelector(".dropdown__value");
    const list = select.querySelector(".dropdown__list");
    const items = select.querySelectorAll(".dropdown__item");
    button.addEventListener('click', function(){
        console.log(button)
        list.classList.toggle("dropdown__list_active");
    })
    items.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault();
            button.innerText = item.innerText;
        })
    });
    
})





