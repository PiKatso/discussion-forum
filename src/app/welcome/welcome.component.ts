import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Router } from '@angular/router';
import { CATEGORIES } from '../mock-category';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [CategoryService]
})

export class WelcomeComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  createNewCategory(newCategoryFromChild: Category) {
    this.categories.push(newCategoryFromChild);
  }
}
