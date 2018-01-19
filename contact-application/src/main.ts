import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//chúng ta đã sử dụng platformBrowser

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)//bootstrapModule là root Module – AppModule.
  .catch(err => console.log(err));
//có Component, có root Module, có nơi thực hiện bootstrap.
//cd forder chua code, ng serve.