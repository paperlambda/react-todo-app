import React from 'react';
import Todo from './todo.js';

const TodoList = ({todos}) => {
    let todoList = todos.map((todo, index) => <Todo key={index}>{todo.title}</Todo>);
    return (<ul>{todoList}</ul>)
};

export default TodoList;