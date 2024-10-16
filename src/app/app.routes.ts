import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./posts-list/posts-list.component').then(m => m.PostsListComponent),
      },
      {
        path: 'links',
        loadComponent: () => import('./links/links.component').then(m => m.LinksComponent),
      },
      {
        path: ':postId',
        loadComponent: () => import('./post/post.component').then(m => m.PostComponent),
      }
    ]
  }
];
