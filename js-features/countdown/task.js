function output() {
    const second = document.getElementById("second");
    const minute = document.getElementById("minute");
    const hour = document.getElementById("hour");

    second.textContent -= 1;

    if (Number(second.textContent) < 0) {
        second.textContent = 59;
        minute.textContent -= 1;
    }
    if (Number(minute.textContent) < 0) {
        hour.textContent -= 1;
        minute.textContent = 59;
        second.textContent = 59;
    }

    if (Number(second.textContent) === 0 && Number(minute.textContent) === 0 && Number(hour.textContent) === 0) {
        alert("Вы победили в конкурсе!")
        clearInterval(interval)
    }
}

interval = setInterval(output, 1000);