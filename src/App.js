import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list.js';

class App extends Component {
    constructor(props){
      super(props);
      this.state = { todos: []};
    }
    render() {
        return (
          <div className="todo-app">
            <form>
              <input type="text"/> <button>Add</button>
            </form>
            <TodoList></TodoList>
          </div>
        );
    }
}

export default App;
