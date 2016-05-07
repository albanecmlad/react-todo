
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TodoApp from './todo-app.js';

ReactDOM.render(
  <TodoApp/>,
  document.getElementsByClassName('todoapp')[0]
);
