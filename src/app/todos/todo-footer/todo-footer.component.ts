import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filter/filter.actions';
import * as actions from 'src/app/filter/filter.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  activeButton: filtrosValidos;
  pendientes: number = 0;

  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
    //this.store.select('filter').subscribe(filter => console.log);
    this.store.subscribe (state => {
      this.pendientes = state.todoss.filter( todo => !todo.comletado).length;
    })
  }

  filter(param: filtrosValidos) {
    switch (param) {
      case 'todos':
        this.store.dispatch(actions.filter({filter: 'todos'}));
        this.activeButton = 'todos';
        break;
      case 'completados':
        this.store.dispatch(actions.filter({filter: 'completados'}));
        this.activeButton = 'completados';
        break;
      case 'pendientes':
        this.store.dispatch(actions.filter({filter: 'pendientes'}));
        this.activeButton = 'pendientes';
        break;

      default:
        break;
    }
  }

  limpiar() {
    this.store.dispatch(limpiarCompletados());
  }

}
