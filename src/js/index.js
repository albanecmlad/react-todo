import * as React from 'react';
import * as ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  state = null
  render() {
    return (
      <div>
        <header>
          <h1>TODOS</h1>
          <input
            placeholder="Что ещё осталось сделать?"
            autoFocus={true}
          />
        </header>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp/>,
  document.getElementsByClassName('todoapp')[0]
);
