import {Component, input} from '@angular/core';
import {Link} from "../links";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-link-item',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.scss'
})
export class LinkItemComponent {
  public link = input<Link>(new Link());
  public fontColor: string | undefined;

  public setColor(): void {
    this.fontColor = this.link().color;
  }

  public resetColor(): void {
    this.fontColor = undefined;
  }
}
