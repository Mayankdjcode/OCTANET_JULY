document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <div>
                <button class="complete">✔</button>
                <button class="delete">✖</button>
            </div>
        `;

        li.querySelector('.complete').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete').addEventListener('click', () => {
            li.remove();
        });

        taskList.appendChild(li);
    }
});
