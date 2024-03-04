import { Component } from '@angular/core';
import { RacesComponent } from '../../component/races-component/races-component.component';
import { classesComponent } from '../../component/classes-component/classes-component.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-creation-perso',
  standalone: true,
  imports: [RacesComponent, classesComponent, NgIf],
  templateUrl: './form-creation-perso.component.html',
  styleUrl: './form-creation-perso.component.scss',
})
export class FormCreationPersoComponent {
  perso = {
    classe: '',
    race: '',
  };

  raceVisible = true;

  onClasseSelected(classe: string) {
    console.log(classe);
    this.perso.classe = classe;
  }

  onRaceSelected(race: string) {
    this.perso.race = race;
  }
}
