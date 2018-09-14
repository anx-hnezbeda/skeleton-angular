// Bootstrap the application
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// Local dependencies
import { AppModule } from './app.module';
import { environment } from 'src/environments/environment';

// Enable angular production mode on production builds
if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
