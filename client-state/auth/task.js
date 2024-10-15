const form = document.querySelector('form');
const storedItem = localStorage.getItem('name');
const signIn = document.querySelector('.signin')
const welcomeBlock = document.querySelector('.welcome');
const userIdText = welcomeBlock.querySelector('span');

if (localStorage.getItem('id')) {
    signIn.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');

    userIdText.textContent = localStorage.getItem('id');
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        if (xhr.readyState === xhr.DONE) {
            const data = JSON.parse(xhr.responseText)

            

            if (data.success) {

                localStorage.setItem('id', data.user_id);

                signIn.classList.remove('signin_active');
                welcomeBlock.classList.add('welcome_active');

                userIdText.textContent = data.user_id;
            } else {
                alert('Неверный логин/пароль')
            }
        }
    })

    


    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    const formData = new FormData(form);

    xhr.send(formData);
    form.reset();
})