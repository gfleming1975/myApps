import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


export class TodoService {
    private todosRef: AngularFireList<any>;
  
    constructor(private db: AngularFireDatabase) {
      this.todosRef = db.list('/todos');
    }
  
    // Implement CRUD operations using AngularFireList methods
    getTodos(),
    addTodo(),
    updateTodo(),
    deleteTodo(),
    (valueChanges(), push(), update(), remove());
  }

  