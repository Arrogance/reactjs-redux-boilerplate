import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TodoList } from './containers/todolist';
import TodoReducer from './reducers/todo';
import { addTodo } from './actions/todo';

import '../stylesheet/base.sass';

const store = createStore(TodoReducer);

store.dispatch(addTodo('Hola'));

render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('app')
);
