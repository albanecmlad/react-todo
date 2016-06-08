
import { connect } from 'react-redux';

import TodoList from '../components/todo-list.js';

import { toggleTodoAction } from '../actions.js';

function mapStateToProps(state) {
  return {
    todos: state.data.get('todos'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleTodoChange: (id) => {
      dispatch(toggleTodoAction(id));
    },
  };
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
