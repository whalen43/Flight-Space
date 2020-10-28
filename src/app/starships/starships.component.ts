import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: any[];
  searchText = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(): void {
    this.apiService
    .getStarshipsRequest()
    .subscribe((data: any[]) => {
      this.starships = data['results'];
    });
  }

}
