// src/components/todo.js

import React from 'react';

import '../../stylesheet/components/todo.sass';

export function Todo(props) {
    const { todo } = props;
    if(todo.isDone) {
        return <strike>{todo.text}</strike>;
    } else {
        return <span>{todo.text}</span>;
    }
}
