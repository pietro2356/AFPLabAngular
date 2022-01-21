import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = "https://jsonplaceholder.typicode.com/posts";
  apiPS: string = "https://servizi.apss.tn.it/opendata/STATOPS001.json";

  constructor(public http: HttpClient) { }

  getSaluto(){
    return "Clicca per usare le API";
  }

  getAPI(){
    return this.http.get(this.apiPS);
  }
}