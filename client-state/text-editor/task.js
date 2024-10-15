const textArea = document.querySelector('textarea');
const storedText = localStorage.getItem('text');
const button = document.querySelector('button');

if (storedText) {
    textArea.value = storedText;
} else {
    localStorage.setItem('text', textArea.value);
}

textArea.addEventListener('input', () => {
    localStorage.setItem('text', textArea.value)
})

button.addEventListener('click', () => {
    localStorage.removeItem('text');
    textArea.value = "";
})