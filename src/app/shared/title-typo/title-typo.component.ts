import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-typo',
  imports: [],
  template: `
    @switch(variant()) {
      @case ('h1') { <h1 class="text-3xl md:text-4xl 2xl:text-6xl uppercase"> {{ label() }} </h1> }
      @case ('h2') { <h2 class="text-2xl md:text-3xl 2xl:text-4xl"> {{ label() }} </h2> }
      @case ('h3') { <h3 class="text-xl md:text-2xl 2xl:text-3xl"> {{ label() }} </h3> }
      @case ('h4') { <h4 class="text-lg md:text-2xl"> {{ label() }} </h4> }
      @default { <h6 class="text-base md:text-lg"> {{ label() }} </h6> }
    }
  `,
  styles: ``
})
export class TitleTypoComponent {
  variant = input(); // variant des titres h1, h2, h3, h4, h6
  label = input(""); // label représente le contenu du titre

}
