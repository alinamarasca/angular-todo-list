import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { LocalStorageService } from './local-storage.service';
import { FilterEnum } from '../enums/filter';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  myTodos: TodoItem[] = [];

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
    this.saveTodoList();
  }
  deleteItem(todo: TodoItem): void {
    const index = this.myTodos.indexOf(todo);
    this.myTodos.splice(index, 1);
    this.saveTodoList();
    this.getTodoList();
  }

  setFilter(filterName: string) {
    console.log('service', filterName);
    if (filterName == FilterEnum.done) {
      // let done = this.myTodos.filter((todo) => todo.isDone);
      // console.log('filtered done', done);
    }
    if (filterName == FilterEnum.active) {
      console.log('active');
      let active = this.myTodos.filter((todo) => !todo.isDone);
      console.log('filtered active', active);
    }
    // if (filterName == FilterEnum.all) {
    //   console.log('all');
    //   let filtered = this.myTodos.filter((todo) => todo.isDone == false);
    //   console.log('filtered active', filtered);
    //   this.myTodos = [...filtered];
    //   this.saveTodoList();
    // }
  }
}
