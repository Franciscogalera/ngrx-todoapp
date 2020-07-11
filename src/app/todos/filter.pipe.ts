import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.models';
import { filtrosValidos } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filtrosValidos): Todo[] {
    console.log(filter);
    console.log(todos);

    switch (filter) {
      case 'completados':
        return todos.filter(todo => todo.comletado);
        break;
        case 'pendientes':
          return todos.filter(todo => !todo.comletado);
          break;

      default:
        return todos;
        break;
    }
  }

}
