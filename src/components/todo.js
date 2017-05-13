import React from 'react';

const isCompleted = (param) => param === true ? 'completed' : '';

const Todo = ({children, index, complete, completed}) => <li className={isCompleted(completed)}><a><input checked={completed} onChange={complete} className="checkbox" type="checkbox" id={index}/> {children}</a></li>;

export default Todo;