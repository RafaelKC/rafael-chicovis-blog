import {ApplicationConfig, provideZoneChangeDetection, SecurityContext} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideMarkdown} from "ngx-markdown";
import {HttpClient, provideHttpClient, withFetch} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideMarkdown({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    })
  ]
};
