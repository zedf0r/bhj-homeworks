const form = document.querySelector('.tasks__control');
const tasksList = document.querySelector('.tasks__list')
const input = document.querySelector('.tasks__input')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createElement();
})

function createElement() {
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskClose = document.createElement('a');

    task.classList.add('task');;
    taskTitle.classList.add('task__title');
    taskTitle.innerText = input.value;
    taskClose.classList.add('task__remove');
    taskClose.textContent = '×'
    
    task.append(taskTitle, taskClose);
    tasksList.append(task);

    taskClose.addEventListener('click', (event) => {
        event.preventDefault();

        task.remove();
    })
    form.reset();
}