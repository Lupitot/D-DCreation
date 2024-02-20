import { Component} from '@angular/core';
import { RecupapiService } from '../../services/recup-api.service';
import {Iclasses} from '../../interfaces/iclasses'

@Component({
  selector: 'app-renduapi',
  standalone: true,
  imports: [],
  templateUrl: './rendu-api.component.html',
  styleUrl: './rendu-api.component.scss'
})
export class RenduapiComponent{

  resultClasse: Object = {};

  constructor(private recupapiService: RecupapiService) { }
  ngOnInit() {
    this.loadClasses();
  }
  
  loadClasses() {

    this.recupapiService.getAllClasses().subscribe({
      next : (data) => {
        this.resultClasse = data;
      },
      error : (err) => {
        console.log(err);
  }
    });
  }}