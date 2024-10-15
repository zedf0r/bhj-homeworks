const form = document.querySelector('form');
const progress = document.querySelector('progress');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
        const complete = e.loaded / e.total;
        progress.value = complete;
    })

    xhr.addEventListener('load', () => {
        alert('Загрузка завершена');
    })

    xhr.addEventListener('error', () => {
        alert('Ошибка')
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(form);

    xhr.send(formData)
})