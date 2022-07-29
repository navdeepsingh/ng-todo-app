import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {
  todos;
  
  constructor() {
    let service = new TodosService();
    this.todos = service.getTodos();
  }

  ngOnInit(): void {
  }

}
