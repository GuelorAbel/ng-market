import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  imports: [],
  template: `
    <div class="w-full md:w-[90%] px-6 md:px-0 mx-auto">
      <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class BoxComponent {

}
