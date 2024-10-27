import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatDialogModule} from '@angular/material/dialog';
import {
  PresentationItemShowServiceService
} from "./presentation-items-show-modal/presentation-item-show-service.service";
import {Credentials} from "./credentials";


@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatDialogModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentationComponent {
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

  constructor(private readonly itemsDialogService: PresentationItemShowServiceService) {
  }

  public openCredentialsDialog(): void {
    this.itemsDialogService.openItemsDialog(Credentials)
  }

  public openProjectsDialog(): void {
    this.itemsDialogService.openItemsDialog([])
  }
}
