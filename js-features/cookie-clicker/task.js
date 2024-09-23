const img = document.getElementById("cookie");
const countClicker = document.getElementById("clicker__counter");
const timerClick = document.getElementById("timerClick");

let flag = true;
const start = Date.now();

function gameClicker() {
    if (flag) {
        cookie.width = 150;
        flag = false;
    } else {
        cookie.width = 200;
        flag = true;
    }

    countClicker.textContent = Number(countClicker.textContent) + 1;
    
    const averageTimer = (Date.now() - start) / 1000;
    timerClick.textContent = (Number(countClicker.textContent) / averageTimer).toFixed(2);
}

img.onclick = gameClicker;