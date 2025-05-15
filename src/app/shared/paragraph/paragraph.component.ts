import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  imports: [],
  template: `
    <p class="text-md md:text-base">
      <ng-content />
    </p>
  `,
  styles: ``
})
export class ParagraphComponent {

}
