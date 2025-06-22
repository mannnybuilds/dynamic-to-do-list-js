
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the Add Task button
    const addButton = document.getElementById('add-task-btn');

    // Select the task input field
    const taskInput = document.getElementById('task-input');

    // Select the task list container
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the trimmed value from the input field
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append the button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event to allow Enter key to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
