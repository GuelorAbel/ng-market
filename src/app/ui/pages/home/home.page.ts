import { Component } from '@angular/core';
import { BoxComponent } from "../../../shared/box/box.component";
import { RouterLink } from '@angular/router';
import { TitleTypoComponent } from "../../../shared/title-typo/title-typo.component";
import { ParagraphComponent } from "../../../shared/paragraph/paragraph.component";

@Component({
  selector: 'app-home',
  imports: [BoxComponent, RouterLink, TitleTypoComponent, ParagraphComponent],
  templateUrl: './home.page.html',
  styles: ``
})
export class HomePage {
  heroImg = '/images/hero-img.jpg';
}
