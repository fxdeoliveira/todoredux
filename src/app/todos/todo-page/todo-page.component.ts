import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.acctions';


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completados: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onClick(){    
    this.completados = !this.completados;
    this.store.dispatch(actions.all({valor: this.completados}))
  }

}
