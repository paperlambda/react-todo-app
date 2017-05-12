import { defaultTodo } from './default-parameters';

const getTodo = () => {
    let todos = JSON.stringify(defaultTodo);
    if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', todos);
    }
    return JSON.parse(localStorage.getItem('todos'));
};

export {
    getTodo
}