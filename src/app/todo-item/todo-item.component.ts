import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item!: TodoItem;
  @Output() toDelete: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() toMark: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  deleteItem(todo: TodoItem) {
    console.log('delete', todo);
    this.toDelete.emit(todo);
  }
  isDone(todo: TodoItem): void {
    console.log('check', todo);
    this.toMark.emit(todo);
  }
}
