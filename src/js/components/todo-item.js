
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: ImmutablePropTypes.map.isRequired,
  }
  render() {
    return (
      <li>
        <div className="view">
          <label>
            {this.props.todo.get('todo')}
          </label>
        </div>
      </li>
    );
  }
}
