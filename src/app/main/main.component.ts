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
  renderedList!: any;
  newItem!: any;
  // currentFilter = '';
  constructor(public _todoService: TodoService) {}

  ngOnInit(): void {
    this.todoList = this._todoService.getTodoList();
    this.renderedList = this.todoList;
    this._todoService.filteredTodos.subscribe((todos) => {
      this.renderedList = todos;
    });
  }
  //add todo
  addTodo(todo: TodoItem): void {
    this._todoService.addItem(todo);
  }
  //delete todo
  deleteTodo(todo: TodoItem): void {
    console.log('main delete', todo);
    this._todoService.deleteItem(todo);
  }
  // mark todo as done
  toggleDone(todo: TodoItem) {
    this._todoService.toggleDone(todo);
  }
}
