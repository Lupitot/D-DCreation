import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecupapiService } from '../../services/recup-api.service';
import { NgFor } from '@angular/common';
import {IRaces} from '../../interfaces/iraces'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'races',
  standalone: true,
  imports: [
    CommonModule,
    NgFor
  ],
  templateUrl: './races-component.component.html',
  styleUrl: './races-component.component.scss'
})
export class RacesComponent{

  resultRace: IRaces[] = [];
  selectedRace: string = '';

  @Input() race : string[] = [];

  @Output() selectItem = new EventEmitter<string>();



  constructor(private recupapiService: RecupapiService) { }
  ngOnInit() {
    this.loadRaces();
  }


  loadRaces() {
    this.recupapiService.getAllRaces().subscribe({
      next : (datarace) => {
        console.log(datarace);
        this.resultRace = datarace;
      },
      error : (err) => {
        console.log(err);
  }
    });
  }



  choiceRace(race : any){
    if(!race?.target?.innerText) return;
    this.selectItem.emit(race.target.innerText);
    this.selectedRace = race.target.innerText;
  }

  

  


}
