'use strict'

// Check for previously stored data
const getSavedTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    try {  
        return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (e) {
        return [];
    }
};
// Store todos in localStorage. todos param is an object.
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if(todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if(todo) {
        todo.completed = !todo.completed;
    }
}
const renderTodos = function(todos, filters) {
    const todoEl = document.getElementById('todos');
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if(filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        });
    } else {
        const message = document.createElement('p');
        message.classList.add('empty-message');
        message.textContent = 'No to-dos to show.'
        todoEl.appendChild(message);
    }
};
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkboxEl = document.createElement('input');
    const textEl = document.createElement('span');
    const removeButton = document.createElement('button');

    checkboxEl.type = 'checkbox';
    checkboxEl.checked = todo.completed;
    containerEl.appendChild(checkboxEl);
    checkboxEl.onchange = () => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    }
    
    textEl.textContent = todo.text;
    containerEl.appendChild(textEl);
    todoEl.appendChild(containerEl);

    // Setup container
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');

    removeButton.textContent = 'remove';
    removeButton.classList.add('button', 'button--text');
    todoEl.appendChild(removeButton);
    removeButton.onclick = () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    }

    return todoEl;
}
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.classList.add('list-title');
    if(incompleteTodos.length === 1) {
        summary.textContent = `You have ${incompleteTodos.length} todo left`;
    } else {
        summary.textContent = `You have ${incompleteTodos.length} todos left`;
    }
    return summary;
}