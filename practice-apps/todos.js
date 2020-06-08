const todos = [ 
    { title:'Order cat food', completed:false }, 
    { title: 'Clean kitchen', completed:true }, 
    { title: 'Buy food', completed:true }, 
    { title: 'Do work', completed:false },
    { title:'Exercise', completed:true },
];

const sortTodos = function(todos) {
    todos.sort(function(a, b){
        if(!a.completed && b.completed) {
            return -1;
        } else if(a.completed && !b.completed) {
            return 1;
        } else {
            return 0;
        }
    });
}

const getThingsToDo = function(array) {
    return array.filter(function(todo, index) {
        // returns todos that are not completed (completed: false)
        return !todo.completed;
    });
}
//console.log(getThingsToDo(todos));

sortTodos(todos);

console.log(todos);

