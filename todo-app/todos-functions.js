// Check for previously stored data
const getSavedTodos = function() {
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos) {
        return JSON.parse(storedTodos);
    } else {
        return [];
    };
};
// Store todos in localStorage. todos param is an object.
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}
const removeTodo = function(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id;
    });
    if(todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}
const toggleTodo = function(id) {
    const todo = todos.find(function(todo) {
        return todo.id === id;
    });
    if(todo !== undefined) {
        todo.completed = !todo.completed;
    }
}
const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    });

    document.getElementById('todos').innerHTML = '';
    document.getElementById('todos').appendChild(generateSummaryDOM(incompleteTodos));

    let todosList = filteredTodos;
    if(filters.hideCompleted) {
        todosList = incompleteTodos;
    }

    todosList.forEach(function(todo) {
        document.getElementById('todos').appendChild(generateTodoDOM(todo));
    });
};
const generateTodoDOM = function(todo) {
    const todoEl = document.createElement('div');

    const checkboxEl = document.createElement('input');
    //checkboxEl.setAttribute('type', 'checkbox');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = todo.completed;
    checkboxEl.onchange = function() {
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
    removeButton.onclick = function() {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    }
    todoEl.appendChild(removeButton);

    return todoEl;
}
const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}