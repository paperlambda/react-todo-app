import React from 'react';

const Todo = ({children, index, complete, completed}) => <li><a><input checked={completed} onChange={complete} className="checkbox" type="checkbox" id={index}/> {children}</a></li>;

export default Todo;