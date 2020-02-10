import { enableProdMode } from '@angular/core';

import { HelloWorldElement } from './app/hello-world.element';

enableProdMode();

customElements.define('hw-element', HelloWorldElement);
