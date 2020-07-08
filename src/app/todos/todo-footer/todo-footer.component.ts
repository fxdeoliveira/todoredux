import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions  from 'src/app/filtro/filtro.actions';
import { limpiar } from '../todo.acctions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosVarios = 'todos';
  filtros: actions.filtrosVarios[] = ['todos','pendientes','completados']
  pendientes: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    /* this.store.select('filtro')
    .subscribe(filtro => this.filtroActual = filtro);
   */
  this.store.subscribe(state => {
    this.filtroActual = state.filtro;
    this.pendientes = state.todos.filter(todo => !todo.completado).length;
  })
  }

  cambiarfiltro(filtro: actions.filtrosVarios){
    this.store.dispatch(actions.setfiltro({filtro: filtro}));

  }

  limpiarCompletados(){
    this.store.dispatch( limpiar())
  }
}
