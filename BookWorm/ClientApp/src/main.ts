import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { SharedService } from './app/shared/shared.service';


var de: SharedService;
export function getBaseUrl () {
  return document.getElementsByTagName( 'base' )[ 0 ].href;
}


export function getRootUrl () {
  return "";
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'ROOT_URL', useFactory: getRootUrl, deps: [] }
];

if ( environment.production ) {
  enableProdMode();
}

platformBrowserDynamic( providers ).bootstrapModule( AppModule )
  .catch( err => console.log( err ) );
