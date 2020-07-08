import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.acctions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputfisico') txtfisico: ElementRef;
  chkCompletado: FormControl;
  txtControl: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtControl = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });

  }

  editar(){
    this.editando = true;
    this.txtControl.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtfisico.nativeElement.select();
    }, 1);
    
  }

  terminar(){
    this.editando = false;
    if(this.txtControl.invalid){return;}
    if(this.txtControl.value === this.todo.texto ){return;}
    this.store.dispatch(actions.editar({
      id: this.todo.id, 
      texto: this.txtControl.value
    }))
  }

  borrar(){
    this.store.dispatch( actions.borrar({ id: this.todo.id}));
  }

}
