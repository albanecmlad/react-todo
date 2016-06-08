
import { Map, List } from 'immutable';

import { ADD_TODO } from './actions.js';

const initialState = new Map({
  newTodo: '',
  todos: new List([
    new Map({
      todo: 'test1',
      completed: false,
    }),
    new Map({
      todo: 'test2',
      completed: false,
    }),
  ]),
});

export default function todoAppReducer(state = { data: initialState }, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        data: state.data
          .set(
            'todos',
            state.data.get('todos')
              .push(new Map({
                todo: action.text.trim(),
                completed: false,
              }))
          ),
      };
    default:
      return state;
  }
}
