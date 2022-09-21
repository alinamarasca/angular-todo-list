import { Component, OnInit } from '@angular/core';
import { FilterEnum } from '../enums/filter';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss'],
})
export class InstrumentsComponent implements OnInit {
  filterEnum = FilterEnum;
  filter = FilterEnum;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setFilter($event: Event, filterName: FilterEnum) {
    $event.preventDefault();
    console.log('sort', filterName);
    this.todoService.setFilter(filterName);
  }
}
