import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./presentation/presentation.component').then(m => m.PresentationComponent),
      },
      {
        path: 'links',
        loadComponent: () => import('./links/links.component').then(m => m.LinksComponent),
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            loadComponent: () => import('./posts-list/posts-list.component').then(m => m.PostsListComponent),
          },
          {
            path: ':postId',
            loadComponent: () => import('./post/post.component').then(m => m.PostComponent),
          }
        ]
      },
    ]
  }
];
