import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

type Todo = {
  name: string
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  
  constructor(
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => this.todos =  todos)
  }

}
