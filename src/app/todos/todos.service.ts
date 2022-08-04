import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Todo = {
  name: string
}

@Injectable({
  providedIn: 'root'
})


export class TodosService {
  fakeData = [{name: "Todo1"},{name: "Todo2"}]

  constructor(
    private http: HttpClient
  ) {}
  
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/');
  }

  // addTodo(todo: any) {
  //   return this.todos.push(todo)
  // }
}
