import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoService } from '../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-board',
  templateUrl: './todo-board.component.html',
  styleUrls: ['./todo-board.component.scss'],
})
export class TodoBoardComponent implements OnInit {
  @Input() items!: TodoItem[];
  @Input() title!: string;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}
}
