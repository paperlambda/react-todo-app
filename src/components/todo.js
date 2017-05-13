import React from 'react';

const isCompleted = (param) => param === true ? 'completed' : '';

const Todo = ({children, index, complete, completed, remove}) => <li className={isCompleted(completed)}><a><input checked={completed} onChange={complete} className="checkbox" type="checkbox" id={index}/> {children} </a><span className="close" onClick={remove} id={index}>Remove</span></li>;

export default Todo;