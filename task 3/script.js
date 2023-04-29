const form = document.getElementById('to-do-form');
const input = document.getElementById('to-do-input');
const toDoList = document.getElementById('to-do-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = text;
        li.appendChild(span);
        const button = document.createElement('button');
        button.innerText = 'Delete';
        button.addEventListener('click', function () {
            li.remove();
        });
        li.appendChild(button);
        toDoList.appendChild(li);
        input.value = '';
    }
});
