import * as React from 'react';
import * as ReactDOM from 'react-dom';

const TodoApp = React.createClass({
  getInitialState: () => null,
  render: () => (
    <div>
      <header>
        <h1>TODOS</h1>
        <input
          placeholder="Что ещё осталось сделать?"
          autoFocus={true}
        />
      </header>
    </div>
  ),
});

ReactDOM.render(
  <TodoApp/>,
  document.getElementsByClassName('todoapp')[0]
);
