import { Component } from '@angular/core';
import { BoxComponent } from "../../../shared/box/box.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [BoxComponent, RouterLink],
  templateUrl: './home.page.html',
  styles: ``
})
export class HomePage {
  heroImg = '/images/hero-img.jpg';
}
