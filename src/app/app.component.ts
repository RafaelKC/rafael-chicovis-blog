import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTree, faSquareRss } from "@fortawesome/free-solid-svg-icons";
import {FooterComponent} from "./footer/footer.component";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, FontAwesomeModule, FooterComponent, RouterLink, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  public faLinkedinIn = faLinkedinIn;
  public faGithub = faGithub;
  public faTree = faTree;
  public faSquareRss = faSquareRss;

  public ngAfterViewInit() {
    document.body.classList.add('dark-theme');
  }

}
