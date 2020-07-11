import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, destroy, toggleAll } from './todo.actions';
import { Todo } from './models/todo.models';

export const initialState: Todo[] = [ new Todo('Zur tanke gehen!') ];

const _todoReducer = createReducer(initialState,
  on(crear, (state, {texto}) => [...state, new Todo( texto )]),
  on(toggle, (state, {id}) => {
    return state.map( todo => {
      if (todo.id === id ) {
        return {
          ...todo,
          comletado: !todo.comletado
        };
      } else { return todo; }
  });
  }),
  on(editar, (state, {id, texto}) => {
    return state.map( todo => {
      if (todo.id === id ) {
        return {
          ...todo,
          texto: texto
        };
      } else { return todo; }
  });
  }),
  on(destroy, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, {completado}) => {
    return state.map(
      todo => {
        return {
          ...todo,
          comletado: completado
        };
      }
    );
  }

  )
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
