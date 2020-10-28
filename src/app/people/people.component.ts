import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: any[];
  searchText = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.apiService
    .getPeopleRequest()
    .subscribe((data: any[]) => {
      this.people = data['results'];
    });
  }

}
