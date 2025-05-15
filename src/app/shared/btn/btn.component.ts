import { Component, output } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  template: `
    <button (click)="ctaBtn.emit()">
      <ng-content />
    </button>
  `,
  styles: ``
})
export class BtnComponent {
  // appel à l'action
  ctaBtn = output();

}
