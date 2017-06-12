import { Component, Input } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
 @Input() childCategoryList: Category[];

}
