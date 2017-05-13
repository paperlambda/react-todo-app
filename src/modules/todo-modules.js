import { defaultTodo } from './default-parameters';

const getTodo = () => {
    let todos = JSON.stringify(defaultTodo);
    if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', todos);
    }
    return JSON.parse(localStorage.getItem('todos'));
};

const addTodo = (object) => {
    let todos = getTodo();
    todos.push(object);
    localStorage.setItem('todos', JSON.stringify(todos));
    return JSON.parse(localStorage.getItem('todos'));
};

const completeTodo = (index) => {
    let todos =  getTodo();
    todos[index].completed = !todos[index].completed;
    localStorage.setItem('todos', JSON.stringify(todos));
    return JSON.parse(localStorage.getItem('todos'));
};

export {
    getTodo,
    addTodo,
    completeTodo
}