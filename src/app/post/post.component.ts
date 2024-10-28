import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MarkdownComponent, MarkdownModule} from "ngx-markdown";
import {MatButtonModule} from "@angular/material/button";
import {faArrowUp, faCopy} from "@fortawesome/free-solid-svg-icons";
import {MatIconModule} from "@angular/material/icon";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PostNavComponent} from "./post-nav/post-nav.component";
import {MatTooltip} from "@angular/material/tooltip";
import {Post, PostService} from "@rkc/blog";
import {ActivatedRoute} from "@angular/router";
import {of, Subscription, switchMap} from "rxjs";
import {DatePipe} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MarkdownModule, MatButtonModule, MatIconModule, FontAwesomeModule, PostNavComponent, MatTooltip, DatePipe, MatProgressSpinner],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('markdownConteiner') public markdownConteiner: MarkdownComponent;

  public faCopy = faCopy;
  public faArrowUp = faArrowUp;
  public headings: Element[] | undefined;
  public showScrollTopButton = false;
  public loaded = signal(false);
  public post: Post;

  private postIdSub: Subscription;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private service: PostService,
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private meta: Meta,
    private title: Title
  ) {
  }

  public ngOnInit(): void {
    this.postIdSub = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        if (params != null && params.has('postId')) {
          return this.service.get(params.get('postId') ?? '');
        }
        return of(null);
      })
    ).subscribe(post => {
      if (post != null) {
        this.post = post;
        this.loaded.set(true);
        this.changeDetector.detectChanges();
        this.setShowScrollButtonSub();
        this.setMetaTags();
      }
    })
  }

  public ngAfterViewInit(): void {
    this.setShowScrollButtonSub();
  }

  public ngOnDestroy() {
    this.postIdSub?.unsubscribe();
  }

  public onLoad(): void {
    this.setHeadings();
  }

  public scrollTop(): void {
    this.markdownConteiner.element.nativeElement.scrollTo({top: 0, behavior: 'smooth'});
  }

  private setHeadings(): void {
    const headings: Element[] = [];
    Array.from(this.elementRef.nativeElement
      .querySelectorAll('h2'))
      .forEach(x => headings.push(x));
    this.headings = headings;
  }

  private setShowScrollButtonSub() {
    const markdownElement = this.markdownConteiner?.element?.nativeElement;
    markdownElement?.addEventListener('scroll', () => {
      this.showScrollTopButton = markdownElement.scrollTop > 50;
    });
  }

  private setMetaTags() {
    this.title.setTitle(this.post.name);
    this.meta.addTags([
      { name: 'description', content: this.post.name },
      { property: 'og:title', content: this.post.name },
      { property: 'og:description', content: this.post.name },
      { property: 'og:image', content: this.post.thumbnailUrl },
      { property: 'og:url', content: this.post.postDownloadUrl },
      { property: 'twitter:card', content: this.post.name },
    ]);
  }
}
