import { Todo } from './todos/models/todo.models'
import { ActionReducerMap } from '@ngrx/store'
import { todoReducer } from './todos/todo.reducer'
import { filterReducer } from './filter/filter.reducer'
import { filtrosValidos } from './filter/filter.actions'

export interface Appstate {
  todoss: Todo[];
  filter: filtrosValidos;
}

export const appReducers: ActionReducerMap<Appstate> = {
  todoss: todoReducer,
  filter: filterReducer
}
