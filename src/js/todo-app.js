
import { List } from 'immutable';
import * as React from 'react';

import TodoItem from './todo-item.js';

export default class TodoApp extends React.Component {
  state = {
    newTodo: '',
    todos: new List([]),
  }
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }
  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.setState({ todos: this.state.todos.push(this.state.newTodo.trim()) });
      this.setState({ newTodo: '' });
    }
  }
  destroyTodo(index) {
    this.setState({ todos: this.state.todos.remove(index) });
  }
  render() {
    return (
      <div>
        <header className="header">
          <h1>TODOS</h1>
          <input
            className="new-todo"
            placeholder="Что ещё осталось сделать?"
            value={this.state.newTodo}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            autoFocus={true}
          />
        </header>
        <section className="main">
          <ul className="todo-list">
            {this.state.todos.map((todo, index) =>
              <TodoItem key={index} todo={todo} onDestroy={this.destroyTodo.bind(this, index)}/>)}
          </ul>
        </section>
      </div>
    );
  }
}
