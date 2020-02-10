import { ɵrenderComponent } from '@angular/core';

import { HelloWorldComponent } from './hello-world.component';

export class HelloWorldElement extends HTMLElement {
  constructor() {
    super();

    ɵrenderComponent(HelloWorldComponent, { host: this })
  }
}
