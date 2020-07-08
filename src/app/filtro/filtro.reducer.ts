import { createReducer, on } from '@ngrx/store';
import { setfiltro, filtrosVarios } from './filtro.actions';


export const initialState: filtrosVarios = 'todos';

const _filtroReducer = createReducer(initialState,
    on(setfiltro, (state, { filtro }) => filtro),
    );

export function filtroReducer(state, action){
    return _filtroReducer(state,action);
}    