
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: ImmutablePropTypes.map.isRequired,
    handleChange: React.PropTypes.func.isRequired,
  }
  render() {
    return (
      <li>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.get('completed')}
            onChange={this.props.handleChange}
          />
          <label>
            {this.props.todo.get('todo')}
          </label>
        </div>
      </li>
    );
  }
}
