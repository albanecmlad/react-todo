
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import TodoItem from './todo-item.js';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: ImmutablePropTypes.list.isRequired,
    handleTodoChange: React.PropTypes.func.isRequired,
  }
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, index) =>
          <TodoItem
            key={index}
            todo={todo}
            handleChange={() => this.props.handleTodoChange(index)}
          />
        )}
      </ul>
    );
  }
}
