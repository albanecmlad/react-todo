
import { Map, List } from 'immutable';
import { createStore } from 'redux';
import React from 'react';

import TodoItem from './todo-item.js';

const bootstrap = new Map({
  newTodo: '',
  todos: new List([
    new Map({
      todo: 'test1',
      completed: false,
    }),
    new Map({
      todo: 'test2',
      completed: false,
    }),
    new Map({
      todo: 'test3',
      completed: true,
    }),
    new Map({
      todo: 'test4',
      completed: false,
    }),
  ]),
});

const todoAppReducer = (state = bootstrap, action) => {
  console.log(action);
  return state;
};

const store = createStore(todoAppReducer);

console.log(store);

export default class TodoApp extends React.Component {
  state = {
    data: new Map({
      newTodo: '',
      todos: new List([]),
    }),
  }
  handleChange = (event) => {
    const data = this.state.data;
    this.setState({ data: data.set('newTodo', event.target.value) });
  }
  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const data = this.state.data;
      this.setState({
        data: data
          .set('todos', data.get('todos').push(data.get('newTodo').trim()))
          .set('newTodo', ''),
      });
    }
  }
  destroyTodo(index) {
    const data = this.state.data;
    this.setState({ data: data.set('todos', data.get('todos').remove(index)) });
  }
  render() {
    return (
      <div>
        <header className="header">
          <h1>TODOS</h1>
          <input
            className="new-todo"
            placeholder="Что ещё осталось сделать?"
            value={this.state.data.get('newTodo')}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            autoFocus={true}
          />
        </header>
        <section className="main">
          <ul className="todo-list">
            {this.state.data.get('todos').map((todo, index) =>
              <TodoItem key={index} todo={todo} onDestroy={this.destroyTodo.bind(this, index)}/>)}
          </ul>
        </section>
      </div>
    );
  }
}
