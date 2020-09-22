import { Component } from '@angular/core';

@Component({
  selector: 'app-other-view',
  template: `
    <a [routerLink]="'/home'">Move to home page</a>
  `
})
export class OtherPageViewComponent {}
