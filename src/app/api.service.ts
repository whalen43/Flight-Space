import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getPeopleRequest() {
    return this.http.get(`${this.baseUrl}/people`);
  }

  getPersonRequest(id) {
    return this.http.get(`${this.baseUrl}/people/${id}`);
  }

  getStarshipsRequest() {
    return this.http.get(`${this.baseUrl}/starships`);
  }

  getPlanetsRequest() {
    return this.http.get(`${this.baseUrl}/planets`);
  }
}
