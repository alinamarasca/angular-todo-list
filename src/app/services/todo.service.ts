import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { LocalStorageService } from './local-storage.service';
import { FilterEnum } from '../enums/filter';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  myTodos: TodoItem[] = [];
  filteredTodos = new Subject<TodoItem[]>();
  currentFilter = '';

  constructor(private localStorageService: LocalStorageService) {
    this.myTodos = localStorageService.getTodos('MyTodos');
  }

  getTodoList(): TodoItem[] {
    return this.myTodos;
  }
  saveTodoList(): void {
    this.localStorageService.setTodos('MyTodos', this.myTodos);
  }
  addItem(newTodo: TodoItem): void {
    this.myTodos.push(newTodo);
    // add to local storage!
    console.log('myTodos', this.myTodos);
    this.saveTodoList();
  }
  toggleDone(todo: TodoItem): void {
    todo.isDone = !todo.isDone;
    console.log('done', todo);
    this.filterTodos(this.currentFilter);
    console.log('toggle', this.currentFilter);
    this.saveTodoList();
    this.getTodoList();
  }
  deleteItem(todo: TodoItem): void {
    const index = this.myTodos.indexOf(todo);
    this.myTodos.splice(index, 1);
    this.saveTodoList();
    this.getTodoList();
  }

  filterTodos(filterName: string) {
    if (filterName === 'all') {
      const all = this.myTodos;
      this.filteredTodos.next(all);
    }

    if (filterName === 'active') {
      const active = this.myTodos.filter((todo) => !todo.isDone);
      this.filteredTodos.next(active);
    }

    if (filterName === 'completed') {
      const completed = this.myTodos.filter((todo) => todo.isDone);
      this.filteredTodos.next(completed);
    }
    this.currentFilter = filterName;
  }
}
