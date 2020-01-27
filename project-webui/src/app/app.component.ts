import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoDialogComponent } from "./dialogs/todo-dialog.component";
import { MatDialog } from "@angular/material";
import { Todo } from "./model/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'project-webui';
  message:string;
  todos: Todo[] = [];

  constructor(private todoDialogRef: MatDialog, private http: HttpClient) {}

  
  
  ngOnInit(): void {
    this.http.get('/api/hello').subscribe(data=>{
      console.log('DATA', data);
      this.message=data['message'];
    })

    this.http.get<Todo[]>("/api/todo").subscribe(result => {  
      console.log(result);     
      this.todos = result['_embedded']['todo'];     
      
    });


  }

  onNewTodoClick(): void {
    let dialogRef = this.todoDialogRef.open(TodoDialogComponent, {
      data: {
        title: 'Create new Todo'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        if (result.title) {
          console.log("saving new todo");
          this.saveNewTodo(result);
        }
      }
    });
  }

  getUncompletedTodos(): Todo[] {
    return this.todos.filter(todo => !todo.completed);
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(todo => todo.completed);
  }

  todoCompleted(index: number, isComplete: boolean): void {
    let todo = this.todos[index];
    todo.completed = isComplete;
    this.updateTodo(todo);
  }

  saveNewTodo(todo: Todo) {
    this.http.post<Todo>("/api/todo", todo).subscribe(response => {
      console.log(response);
      this.todos.push(response);
      console.log(this.todos.toString);
    });
  }

  updateTodo(todo: Todo): void {
    let uri = `/api/todo/${todo.id}`;
    this.http.put(uri, todo).subscribe(result => {
      console.log(result);
    });
  }

  deleteTodo(index: number): void {
    let todo = this.todos[index];   
    let uri = `/api/todo/${todo.id}`;     
    this.http.delete(uri).subscribe(result => {
    this.todos.splice(index, 1);
    });
  }

  
}
