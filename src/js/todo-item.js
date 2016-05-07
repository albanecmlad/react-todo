
import * as React from 'react';

const classnames = require('classnames');

export default class TodoItem extends React.Component {
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

