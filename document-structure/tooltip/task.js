const links = document.querySelectorAll('a');
const body = document.body;
let currentTooltip = null;

links.forEach((link) => {
    link.addEventListener('click', (item) => {
        item.preventDefault();    
        const titleTarget = item.target.getAttribute('title');

        if (currentTooltip && currentTooltip.textContent === titleTarget) {
            currentTooltip.remove();
            currentTooltip = null;
            return;
        }

        if (currentTooltip) {
            currentTooltip.remove();
        }

        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip', 'tooltip_active');
        tooltip.textContent = titleTarget;

        const {left, top, height} = link.getBoundingClientRect();
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top + height}px`;

        body.append(tooltip);
        currentTooltip = tooltip;
    })
})