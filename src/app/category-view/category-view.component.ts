import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';


@Component({
  selector: 'category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css'],
  providers: [CategoryService]
})
export class CategoryViewComponent implements OnInit {
  categoryId: number;
  categoryShow: Category;

  constructor(private route: ActivatedRoute, private location: Location, private categoryService: CategoryService) {}

ngOnInit() {
  this.route.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['id']);
    });
    this.categoryShow =this.categoryService.getCategoryById(this.categoryId);

  }
}
