import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CategoryViewComponent } from './category-view/category-view.component'

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'category/:id',
    component: CategoryViewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
