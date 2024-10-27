import {Inject, Injectable} from '@angular/core';
import {WINDOW} from "@rkc/blog/utils/window.service";

type themeType = 'light-theme' | 'dark-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: themeType;
  private readonly THEME_KEY = 'theme';

  constructor(@Inject(WINDOW) private window: Window | null) {
    this.loadTheme();
  }

  public toggleTheme() {
    this.theme = this.isDarkMode() ? 'light-theme' : "dark-theme";
    this.saveTheme();
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(this.theme);
  }

  public isDarkMode(): boolean {
    return this.theme == 'dark-theme';
  }

  private loadTheme() {
    if (this.window) {
      const storedTheme = this.window.localStorage.getItem(this.THEME_KEY);
      this.theme = storedTheme != null &&  storedTheme !== '' ? (storedTheme as themeType) : 'dark-theme';
      document.body.classList.add(this.theme);
    }
  }

  private saveTheme() {
    if (this.window) {
      this.window.localStorage.setItem(this.THEME_KEY, this.theme);
    }
  }
}
