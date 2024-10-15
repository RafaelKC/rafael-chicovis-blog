import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {links} from "./links";
import {RouterLink} from "@angular/router";
import {LinkItemComponent} from "./link-item/link-item.component";

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterLink,
    LinkItemComponent
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {
  public links = links;
}
