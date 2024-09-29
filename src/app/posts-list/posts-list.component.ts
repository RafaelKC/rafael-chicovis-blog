import {Component, OnInit, signal} from '@angular/core';
import {GetListInput, Post, PostService} from "@rkc/blog";
import {first} from "rxjs";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {DatePipe, NgClass, NgOptimizedImage} from "@angular/common";
import {CardModule} from 'primeng/card';
import {ImageModule} from "primeng/image";
import {Router} from "@angular/router";


@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatButtonModule, MatIconModule, FaIconComponent, NgClass, CardModule, NgOptimizedImage, ImageModule, DatePipe],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit {
  public MAX_POST_REQUEST = 25;
  public loading = signal(true);
  public hasMoreItems = signal(false);
  public posts: Post[];

  constructor(private postService: PostService, private router: Router) {
  }

  public ngOnInit(): void {
    this.loadPosts();
  }

  public getHasValue(): boolean {
    return this.posts != null && this.posts.length >= 1
  }

  public loadPosts(): void {
    this.loading.set(true);
    const postInput = new GetListInput();
    postInput.maxResultCount = this.MAX_POST_REQUEST;
    this.postService.getPosts(postInput).pipe(first()).subscribe(posts => {
      if (this.posts == null) this.posts = [];
      this.hasMoreItems.set(posts.length >= this.MAX_POST_REQUEST);
      this.posts = this.posts.concat(posts);
      this.loading.set(false);
    });
  }

  public async openPost(id: string): Promise<void> {
    await this.router.navigate([id]);
  }
}
