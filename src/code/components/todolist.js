// src/components/todolist.js

import React from 'react';
import { Todo } from './todo';

import '../../stylesheet/components/todolist.sass';

export function TodoList(props) {
    const { todos, toggleTodo, addTodo } = props;

    const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;

        if(isEnterKey && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    const toggleClick = id => event => toggleTodo(id);

    return (
        <div className='todo'>
            <input type='text'
                   className='todo__entry'
                   placeholder='Add todo'
                   onKeyDown={onSubmit} />
            <ul className='todo_list'>
                {todos.map(t => (
                    <li key={t.get('id')}
                        className='todo_item'
                        onClick={toggleClick(t.get('id'))}>
                        <Todo todo={t.toJS()} />
                    </li>
                ))}
            </ul>
        </div>
    );
}