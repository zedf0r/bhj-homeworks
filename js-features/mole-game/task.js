const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function handleClick(event) {
    const hole = event.currentTarget;
    if (hole.classList.contains('hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }

    if (Number(dead.textContent) === 10) {
        alert("Вы выйграли");
        dead.textContent = 0;
        lost.textContent = 0;
    } else if (Number(lost.textContent) === 10) {
        alert("Вы проиграли");
        dead.textContent = 0;
        lost.textContent = 0;
    }
}

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', handleClick);
}