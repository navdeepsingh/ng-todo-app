import {Component} from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import {TodosService} from "../todos.service"

@Component({
    selector: 'add-todo',
    templateUrl: "./form.component.html"
    
})

export class FormComponent {
    // todoService;
    // constructor() {
    //     this.todoService =  new TodosService()
    // }

    form = new FormGroup({
        todo: new FormControl('', Validators.minLength(2))
    })

    get todo(): any {
        return this.form.get('todo')
    }

    // onSubmit(): void {
    //     console.log(this.form.value.todo)
    //     const newTodo = this.form.value.todo;
    //     this.todoService.addTodo({name: newTodo})
    //     console.log(this.todoService.getTodos())
    // }

    addTodoControl = new FormControl('');

}