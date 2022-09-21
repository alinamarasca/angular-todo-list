import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  // todo!: TodoItem;
  @Output() newTodo: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  submitTodo($event: Event): void {
    $event.preventDefault();
    const newTodo = {
      id: String(Math.floor(Math.random() * 1000)),
      title: (document.getElementById('title') as HTMLInputElement).value,
      dateAdded: new Date(),
      isDone: false,
    };
    console.log('submit', newTodo);
    this.newTodo.emit(newTodo);
    (document.getElementById('title') as HTMLInputElement).value = '';
  }
}
