import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: any[];

  @ViewChild('accordion', {static: false}) Accordion: MatAccordion;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    this.apiService
    .getPlanetsRequest()
    .subscribe((data: any[]) => {
      this.planets = data['results'];
    });
  }

}
