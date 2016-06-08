
export const ADD_TODO = 'ADD_TODO';

export function addTodoAction(text) {
  return {
    type: ADD_TODO,
    text,
  };
}
