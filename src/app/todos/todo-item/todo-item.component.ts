import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducer';
import { crear, toggle, editar, destroy } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico', {static: false}) inputFisico: ElementRef;

  check: FormControl;
  txtInput: FormControl;

  editando = false;

  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
    this.check = new FormControl(this.todo.comletado);
    this.txtInput = new FormControl(this.todo.texto);

    this.check.valueChanges.subscribe(val => {
      this.store.dispatch( toggle({id: this.todo.id}) );
    });

  }



  edit() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout( () => {this.inputFisico.nativeElement.select(); }, 1);
  }

  terminarEdit() {
    this.editando = false;
    this.store.dispatch( editar({id: this.todo.id, texto: this.txtInput.value}));
  }

  destroy() {
    this.store.dispatch( destroy({id: this.todo.id}));
  }

}
