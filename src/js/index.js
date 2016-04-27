import * as React from 'react';
import * as ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  static propTypes = {
    todo: React.PropTypes.string.isRequired,
  }
  render() {
    return (
      <li>
        <div>
          <input
            type="checkbox"
          />
          <label>
            {this.props.todo}
          </label>
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
  render() {
    return (
      <div>
        <header>
          <h1>TODOS</h1>
          <input
            placeholder="Что ещё осталось сделать?"
            value={this.state.newTodo}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            autoFocus={true}
          />
        </header>
        <section>
          <ul>
            {this.state.todos.map((todo, index) => <TodoItem key={index} todo={todo}/>)}
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
