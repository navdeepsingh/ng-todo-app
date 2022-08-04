import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos:{name: string}[];
  
  constructor() {
    this.todos = [{name: "Todo1"},{name: "Todo2"}]
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: any) {
    return this.todos.push(todo)
  }
}
