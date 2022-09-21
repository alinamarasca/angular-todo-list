import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  todoList!: TodoItem[];
  doneList!: TodoItem[];
  order!: string;

  newItem!: any;
  constructor(public _todoService: TodoService) {}

  ngOnInit(): void {
    this.todoList = this._todoService.getTodoList();
    console.log('main', this.todoList);
  }

  addTodo(todo: TodoItem): void {
    this._todoService.addItem(todo);
  }

  deleteTodo(todo: TodoItem): void {
    console.log('main delete', todo);
    this._todoService.deleteItem(todo);
  }

  toggleDone(todo: TodoItem) {
    this._todoService.toggleDone(todo);
  }
}
