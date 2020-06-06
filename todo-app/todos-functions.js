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
    const filteredTodos = todos.filter( (todo) => todo.title.toLowerCase().includes(filters.searchText.toLowerCase()) );

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    document.getElementById('todos').innerHTML = '';
    document.getElementById('todos').appendChild(generateSummaryDOM(incompleteTodos));

    let todosList = filteredTodos;
    if(filters.hideCompleted) {
        todosList = incompleteTodos;
    }

    todosList.forEach((todo) => {
        document.getElementById('todos').appendChild(generateTodoDOM(todo));
    });
};
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');

    const checkboxEl = document.createElement('input');
    //checkboxEl.setAttribute('type', 'checkbox');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = todo.completed;
    checkboxEl.onchange = () => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    }
    todoEl.appendChild(checkboxEl);
    
    const textEl = document.createElement('span');
    textEl.textContent = todo.title;
    todoEl.appendChild(textEl);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.onclick = () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    }
    todoEl.appendChild(removeButton);

    return todoEl;
}
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}