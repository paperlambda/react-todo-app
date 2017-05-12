import React, { Component, PropTypes} from 'react';

const Todo = ({children}) => <li><a>{children}</a></li>;

Todo.PropTypes = {children: React.PropTypes.string};
Todo.defaultProps = {children : 'This is your task.'};

export default Todo;