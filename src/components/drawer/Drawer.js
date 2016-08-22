import {
  Component,
  Output,
  Injectable,
  EventEmitter,
  HostListener,
  ElementRef
} from '@angular/core';

import { DrawerContainer } from './DrawerContainer.js';
import { DrawerOverlay } from './DrawerOverlay.js';
import './drawer.scss';

@Injectable()
export class Drawer {

  // string | TemplateRef<any>
  open(content, options = {}) {

  }

  close() {

  }

}

export {
  Drawer,
  DrawerContainer,
  DrawerOverlay
};
