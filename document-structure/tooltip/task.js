const links = document.querySelectorAll('a');
const body = document.body;

links.forEach((link) => {
    link.addEventListener('click', (item) => {
        item.preventDefault();        

        const tooltips = document.querySelectorAll('.tooltip');
        const title = item.target.getAttribute('title');
        
        tooltips.forEach(tooltip => {
            tooltip.classList.remove('tooltip_active');
        })

        const {left, top} = item.target.getBoundingClientRect();
        const tooltip = document.createElement('div')

        tooltip.style.top = top + 20 + 'px';
        tooltip.style.left = left + 'px';
        tooltip.classList.add('tooltip', 'tooltip_active');
        tooltip.innerText = title;
        document.body.append(tooltip)
    })
})