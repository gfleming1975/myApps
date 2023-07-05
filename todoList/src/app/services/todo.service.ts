import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.todosRef = db.list('/todos');
  }

  getTodos(): Observable<any[]> {
    return this.todosRef.valueChanges();
  }

  addTodo(title: string) {
    this.todosRef.push({ title: title });
  }

  updateTodo(todoId: string, title: string) {
    this.todosRef.update(todoId, { title: title });
  }

  deleteTodo(todoId: string) {
    this.todosRef.remove(todoId);
  }
}
