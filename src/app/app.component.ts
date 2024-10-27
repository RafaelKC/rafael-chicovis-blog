import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTree, faSquareRss, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import {FooterComponent} from "./footer/footer.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ThemeService} from "@rkc/blog";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, FontAwesomeModule, FooterComponent, RouterLink, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public faLinkedinIn = faLinkedinIn;
  public faGithub = faGithub;
  public faTree = faTree;
  public faSquareRss = faSquareRss;
  public faMoon = faMoon;
  public faSun = faSun;

  constructor(
    public themeService: ThemeService,
    private meta: Meta) {
    this.meta.addTags([
      { name: 'theme-color', content: '#000000' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ])
  }
}
