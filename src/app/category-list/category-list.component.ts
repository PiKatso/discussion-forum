import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
 @Input() childCategoryList: Category[];
 @Output() newCategorySender = new EventEmitter();

 createNewCategory(name: string, description: string) {
   var newCategory: Category = new Category(name, description);
   this.newCategorySender.emit(newCategory);
   console.log(newCategory);
 }

}
