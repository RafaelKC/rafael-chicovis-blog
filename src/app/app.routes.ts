import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./posts-list/posts-list.component').then(m => m.PostsListComponent),
      }
    ]
  }
];
