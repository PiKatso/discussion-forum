import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { CATEGORIES } from './mock-category';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories() {
    return CATEGORIES;
  }

}
