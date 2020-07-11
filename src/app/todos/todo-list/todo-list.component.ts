import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { Todo } from '../models/todo.models';
import { Store, select } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private store: Store<Appstate>) {
  }

  ngOnInit() {
    /*this.store.select('todoss')
    .subscribe((resp) => {this.items = resp; });
    this.store.select('filter')
    .subscribe((resp => this.filtroActual = resp));*/
    this.store.subscribe(state => {
      this.items = state.todoss;
      this.filtroActual = state.filter;
    })
  }

}
