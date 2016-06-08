
import { connect } from 'react-redux';

import TodoList from '../components/todo-list.js';

function mapStateToProps(state) {
  return {
    todos: state.data.get('todos'),
  };
}
const TodoListContainer = connect(
  mapStateToProps
)(TodoList);

export default TodoListContainer;
