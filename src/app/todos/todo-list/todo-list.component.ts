import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { Todo } from '../models/todo.models';
import { Store, select } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  items: Todo[] = [];

  constructor(private store: Store<Appstate>) {
  }

  ngOnInit() {
    this.store.select('todoss')
    .subscribe((resp) => {this.items = resp; console.log(this.items)});
  }

}
