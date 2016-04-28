import * as React from 'react';
import * as ReactDOM from 'react-dom';
const classnames = require('classnames');

class TodoItem extends React.Component {
  state = {
    completed: false,
  }
  static propTypes = {
    todo: React.PropTypes.string.isRequired,
    onDestroy: React.PropTypes.func.isRequired,
  }
  handleChange = () => {
    this.setState({ completed: !this.state.completed });
  }
  render() {
    return (
      <li className={classnames({
        completed: this.state.completed,
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.state.completed}
            onChange={this.handleChange}
          />
          <label>
            {this.props.todo}
          </label>
          <button
            className="destroy"
            onClick={this.props.onDestroy}
          />
        </div>
      </li>
    );
  }
}

class TodoApp extends React.Component {
  state = {
    newTodo: '',
    todos: [],
  }
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }
  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const todos = this.state.todos;
      todos.push(this.state.newTodo.trim());
      this.setState({ todos });
      this.setState({ newTodo: '' });
    }
  }
  destroyTodo(index) {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos });
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

ReactDOM.render(
  <TodoApp/>,
  document.getElementsByClassName('todoapp')[0]
);
