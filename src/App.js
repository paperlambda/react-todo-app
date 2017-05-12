import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list';
import FormAdd from './components/form-add';
import {getTodo, addTodo} from './modules/todo-modules';

class App extends Component {
    constructor(props){
      super(props);
      this.state = { todos: []};
    }
    submitNew(title){
        let todo = {title: title};
        let todos = addTodo(todo);
        this.setState({todos: todos});
    }
    componentDidMount(){
        let todos = getTodo();
        this.setState({todos:todos});
    }
    render() {
        return (
          <div className="todo-app">
            <FormAdd submitNew={this.submitNew.bind(this)}/>
            <TodoList todos={this.state.todos}></TodoList>
          </div>
        );
    }
}

export default App;
