import {Component, ElementRef, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-post-nav',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './post-nav.component.html',
  styleUrl: './post-nav.component.scss'
})
export class PostNavComponent {
  @Input() public headings: Element[] | undefined;
  public selectedHeader: Element | undefined;

  public headingClicked(heading: Element): void {
    heading.scrollIntoView({ behavior: 'smooth' });
    this.selectedHeader = heading;
  }
}
