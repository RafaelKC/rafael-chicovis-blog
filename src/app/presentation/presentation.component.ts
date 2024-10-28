import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatDialogModule} from '@angular/material/dialog';
import {
  PresentationItemShowServiceService
} from "./presentation-items-show-modal/presentation-item-show-service.service";
import {Credentials} from "./credentials";
import {Meta, Title} from "@angular/platform-browser";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatDialogModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PresentationComponent implements OnInit {
  public badges: string[] = [
    'typescript-original.svg',
    'angular-original.svg',
    'cypressio-original.svg',
    'dotnetcore-original.svg',
    'csharp-original.svg',
    'docker-plain-wordmark.svg',
    'git-original.svg',
    'postgresql-original.svg',
    'supabase-original.svg',
    'jira-original-wordmark.svg'
  ];

  constructor(
    private readonly itemsDialogService: PresentationItemShowServiceService,
    private title: Title,
    private meta: Meta
    ) {}

  public ngOnInit(): void {
    this.setMetaTags();
  }

  public openCredentialsDialog(): void {
    this.itemsDialogService.openItemsDialog(Credentials)
  }

  public openProjectsDialog(): void {
    this.itemsDialogService.openItemsDialog([])
  }

  private setMetaTags() {
    this.title.setTitle('Rafael Chicovis');
    this.meta.addTags([
      { name: 'description', content: 'Rafael Chicovis`s personal site' },
      { property: 'og:title', content: 'Rafael Chicovis' },
      { property: 'og:description', content: 'Rafael Chicovis`s personal site' },
      { property: 'og:image', content: `${environment.appUrl}/link-preview.png` },
      { property: 'og:url', content:  environment.appUrl},
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@rafk_chicovis' },
      { property: 'twitter:creator', content: '@rafk_chicovis' },
    ]);
  }
}
