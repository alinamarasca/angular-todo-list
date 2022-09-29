import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterEnum } from '../enums/filter';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss'],
})
export class InstrumentsComponent implements OnInit {
  filterEnum = FilterEnum;
  // @Output() changeFilter = new EventEmitter<FilterEnum>();
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  // select filter: completed or active
  setFilter($event: Event, filterName: FilterEnum) {
    $event.preventDefault();
    this.todoService.filterTodos(filterName);
    console.log(filterName);
    // this.todoService.currentFilter = filterName;
  }
}
