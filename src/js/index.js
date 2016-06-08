
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoAppComponent from './components/todo-app.js';
import todoAppReducer from './reducers.js';

import { addTodoAction } from './actions.js';


const store = createStore(todoAppReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoAppComponent/>
  </Provider>,
  document.getElementsByClassName('todoapp')[0]
);

store.dispatch(addTodoAction('new todo test'));
