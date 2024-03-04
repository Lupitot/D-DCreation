import { Component} from '@angular/core';
import { RecupapiService } from '../../services/recup-api.service';
import {Iclasses} from '../../interfaces/iclasses'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-renduapi',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './rendu-api.component.html',
  styleUrl: './rendu-api.component.scss'
})
export class RenduapiComponent{

  resultClasse: Iclasses[] = [];

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
  }}