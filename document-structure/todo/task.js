const form = document.querySelector('.tasks__control');
const tasksList = document.querySelector('.tasks__list')
const input = document.querySelector('.tasks__input')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createElement();
})

function createElement() {
    tasksList.insertAdjacentHTML('afterbegin', `
            <div class="task">
              <div class="task__title">${input.value}</div>
              <a href="#" class="task__remove">&times;</a>
            </div>
        `)
    const taskClose = document.querySelector('.task__remove');
    const task = document.querySelector('.task')
    

    taskClose.addEventListener('click', (event) => {
        event.preventDefault();

        task.remove();
    })
    form.reset();
}