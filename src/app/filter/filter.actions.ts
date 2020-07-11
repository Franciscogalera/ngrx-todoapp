import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados'  | 'pendientes';


export const filter = createAction(
  '[Filter] Set Filter',
  props<{filter: filtrosValidos}>()
  );


