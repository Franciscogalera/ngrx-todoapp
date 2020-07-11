import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';
import { filtrosValidos } from './filter.actions'

export const initialState: filtrosValidos = 'todos';

const _filterReducer = createReducer(initialState,
  on(actions.filter, (state, {filter}) => filter)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
