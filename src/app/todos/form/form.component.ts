import {Component} from "@angular/core"
import { FormControl } from "@angular/forms"

@Component({
    selector: 'add-todo',
    template: `
    <form>
        <input type="text" [formControl]="addTodoControl">
        <button>Submit</button>
    </form>
        Typed Todo: {{addTodoControl.value}}
    `
    
})

export class FormComponent {
    addTodoControl = new FormControl('')
    log() {
        console.log(this.addTodoControl)
    }
}