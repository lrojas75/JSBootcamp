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
    const text = e.target.elements.todo_title.value.trim();
    if(text.length > 0) {
        todos.push({
            id: uuidv4(),
            text, 
            completed: false
        });
        saveTodos(todos);
        renderTodos(todos, filters);
        e.target.elements.todo_title.value = '';
    }
}

document.getElementById('hide_completed').onchange = (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
}

