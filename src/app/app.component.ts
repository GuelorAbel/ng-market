import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { BoxComponent } from "./shared/box/box.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavMenuComponent, BoxComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  
}
