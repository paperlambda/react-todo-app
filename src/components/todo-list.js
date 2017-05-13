import React from 'react';
import Todo from './todo.js';

const TodoList = ({todos, complete, completed}) => {
    let todoList = todos.map((todo, index) => <Todo index={index} completed={todo.completed} complete={complete} key={index}>{todo.title}</Todo>);
    return (<ul>{todoList}</ul>)
};

export default TodoList;