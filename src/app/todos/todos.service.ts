import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos;
  constructor() {
    this.todos = ['Todo1','Todo2','Todo3']
  }

  getTodos() {
    return this.todos;
  }

  // addTodo(todo) {
  //   return this.todos.push(todo)
  // }
}
