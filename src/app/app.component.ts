import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  // theme
  storedTheme: string | null = localStorage.getItem('theme');

  ngOnInit() {}

  setTheme() {
    if (this.storedTheme === 'dark-theme') {
      //toggle and upd
      localStorage.setItem('theme', 'light-theme');
      this.storedTheme = localStorage.getItem('theme');
    } else {
      //toggle and upd
      localStorage.setItem('theme', 'dark-theme');
      this.storedTheme = localStorage.getItem('theme');
    }
  }
}
