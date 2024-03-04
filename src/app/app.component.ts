import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RacesComponent } from './component/races-component/races-component.component';
import { classesComponent } from './component/classes-component/classes-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RacesComponent,
    classesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  races = RacesComponent;
  classes = classesComponent;
}
