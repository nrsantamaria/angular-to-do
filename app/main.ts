//Known as an entry point, the main.ts file is responsible for instructing Angular's SystemJS tool exactly how to assemble our application when we launch it. It will load our root module, which then loads our root component.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
