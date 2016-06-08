
import React from 'react';

import TodoListContainer from '../containers/todo-list-cont.js';

export default class TodoAppComponent extends React.Component {
  render() {
    return (
      <div>
        <header className="header">

        </header>
        <section className="main">
          <TodoListContainer/>
        </section>
      </div>
    );
  }
}
