// src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./features/home/pages/home.component').then(m => m.HomeComponent) },
      { path: 'courses', loadComponent: () => import('./features/courses/pages/course-list/course-list.component').then(m => m.CourseListComponent) },
      // add other pages similarly
    ]
  }
];
