
import { Map } from 'immutable';
import React from 'react';

const classnames = require('classnames');

export default class TodoItem extends React.Component {
  state = {
    data: new Map({
      completed: false,
    }),
  }
  static propTypes = {
    completed: React.PropTypes.bool.isRequired,
    todo: React.PropTypes.string.isRequired,
    onDestroy: React.PropTypes.func.isRequired,
  }
  handleChange = () => {
    const data = this.state.data;
    this.setState({ data: data.set('completed', !data.get('completed')) });
  }
  render() {
    console.log(this.props.todo);
    return (
      <li className={classnames({
        completed: this.state.data.get('completed'),
      })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.state.data.get('completed')}
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

