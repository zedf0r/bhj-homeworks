const xhr = new XMLHttpRequest();
const pollTitle = document.querySelector('.poll__title');
const pollAnswer = document.querySelector('.poll__answers');

xhr.addEventListener('readystatechange', ()=> {
    if (xhr.readyState === xhr.DONE) {
        const data = JSON.parse(xhr.responseText).data;

        pollTitle.textContent = data.title;
        
        for (let i = 0; i <= data.answers.length - 1; i++) {
            const button = document.createElement('button');
            button.classList.add('poll__answer');
            button.style.marginRight = '10px' // Без марджина почему-то кнопки становились в упор
            button.textContent = data.answers[i];
            pollAnswer.append(button);
            console.log(data)

            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан')

            })
        }
            
    }
})


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.send();

