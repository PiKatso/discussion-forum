import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  categoryList: Category[] = [
    new Category('Dev Tips', 'Follow along with all the latest dev tips here', 1),
    new Category('Random', 'Random topics for fun', 2),
    new Category('Mentorship', 'ask questions and recieve answers', 3),
  ];

  createNewCategory(newCategoryFromChild: Category) {
    this.categoryList.push(newCategoryFromChild);
  }
}
