import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dataService: DataService) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res)
    })
  }

  todoItems: string[] = [];
  newItem: string = '';
  editingIndex: number | null = null;
  editItemValue: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.todoItems.push(this.newItem);
      this.newItem = '';
    }
  }

  deleteItem(index: number) {
    this.todoItems.splice(index, 1);
  }

  editItem(index: number) {
    this.editingIndex = index;
    this.editItemValue = this.todoItems[index];
  }

  updateItem() {
    if (this.editingIndex !== null && this.editItemValue.trim() !== '') {
      this.todoItems[this.editingIndex] = this.editItemValue;
      this.editingIndex = null;
      this.editItemValue = '';
    }
  }
}