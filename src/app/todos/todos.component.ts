import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  inputTodo: string;
  todos: Todo[] = [];

  constructor() { }

  addTodo() {
    if ( this.inputTodo ) {
      this.todos.push({libelle: this.inputTodo, estBarre: false});
      this.inputTodo = '';
    }
  }

  toggleTodo(todo: Todo) {
    todo.estBarre = !todo.estBarre;
  }

  delTodo(index: number) {
    this.todos.splice(index, 1);
  }

  ngOnInit() {
  }

}
