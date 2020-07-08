import { createAction, props } from '@ngrx/store';

export type filtrosVarios = 'todos'| 'completados' | 'pendientes';

export const setfiltro = createAction(
    '[Filtro] Set Filtro',
props<{ filtro: filtrosVarios}>()
);