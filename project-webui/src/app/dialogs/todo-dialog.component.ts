import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Todo } from "../model/todo";

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css']
})
export class TodoDialogComponent {

  todo: Todo = new Todo();

  constructor(public dialogRef: MatDialogRef<TodoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onSaveClick(): void {
    this.dialogRef.close(this.todo);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  

}
