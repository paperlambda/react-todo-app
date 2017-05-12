import React, { Component} from 'react';
import Todo from './todo.js';
import {getTodo} from '../modules/get-todo-list';

class TodoList extends Component {
    render(){
        let todos = getTodo();
        let todoList = todos.map((todo, index) => <Todo key={index}>{todo.title}</Todo>);
        return (
            <ul>
                {todoList}
            </ul>
        )
    }
}
export default TodoList;