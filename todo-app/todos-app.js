'use strict'

// Check for previously stored data
const todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters);

document.getElementById('search_text').oninput = (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
}

document.getElementById('todo_form').onsubmit = (e) => {
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        title: e.target.elements.todo_title.value, 
        completed: false
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.todo_title.value = '';
}

document.getElementById('hide_completed').onchange = (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
}

