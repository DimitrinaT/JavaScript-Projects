/* this function gets the task from input*/
function get_todos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputed task to the get_todos function array*/
function add() {
    var task = document.getElementById('task').value.trim();
    
    if (task === '') {
        return false;
    }
    
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();
    return false;
}

/*This function keeps the tasks permanently displayed on the screen*/
function show() {
    var todos = get_todos();
    var html = '<ul>';
    
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" onclick="removeTask(' + i + ')">x</button></li>';
    }
    
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
}

/* Remove a todo item */
function removeTask(index) {
    var todos = get_todos();
    todos.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
}

/*this displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);

/*this allows pressing Enter to add a task*/
document.getElementById('task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        add();
    }
});

/*this will keep the inputs displayed permanently on the screen*/
show();