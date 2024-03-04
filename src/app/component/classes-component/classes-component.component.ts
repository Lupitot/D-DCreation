import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecupapiService } from '../../services/recup-api.service';
import {Iclasses} from '../../interfaces/iclasses'
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'classes',
  standalone: true,
  imports: [
    CommonModule,
    NgFor
  ],
  templateUrl: './classes-component.component.html',
  styleUrl: './classes-component.component.scss'
})
export class classesComponent{

  resultClasse: Iclasses[] = [];
  selectedClasse: string = '';
  constructor(private recupapiService: RecupapiService) { }
  ngOnInit() {
    this.loadClasses();
  }
  
  loadClasses() {
    this.recupapiService.getAllClasses().subscribe({
      next : (data) => {
        console.log(data);
        this.resultClasse = data;
      },
      error : (err) => {
        console.log(err);
  }
    });
  }

  @Input() classe: string[] = [];

  @Output() selectItem = new EventEmitter<string>();

  choiceClasse(classe: any){
    console.log(classe);
    if(!classe?.target?.innerText) return;
    this.selectItem.emit(classe.target.innerText);
    this.selectedClasse = classe.target.innerText;
  }



}