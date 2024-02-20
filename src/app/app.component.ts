import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RenduapiComponent } from './pages/rendu-api/rendu-api.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RenduapiComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
