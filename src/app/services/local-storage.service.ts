import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getTodos(key: string): any {
    let data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }

  setTodos(key: any, todos: any): void {
    localStorage.setItem(key, JSON.stringify(todos));
  }
}
