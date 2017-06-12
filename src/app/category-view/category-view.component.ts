import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category.model';


@Component({
  selector: 'category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {}

ngOnInit() {
  this.route.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['id']);
    });
  }

  categoryId: number = null;
}
