import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
 @Input() childCategoryList: Category[];
 @Output() newCategorySender = new EventEmitter();

 constructor(private router: Router) {}

 createNewCategory(name: string, description: string, id: number) {
   var newCategory: Category = new Category(name, description, id);
   this.newCategorySender.emit(newCategory);
   console.log(newCategory);
 }

  goToCategory(clickedCategory: Category) {
    this.router.navigate(['category', clickedCategory.id]); {}
  }

  ngOnInit() {
  }
  
}
