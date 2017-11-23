import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class GraphsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMotosDistribution() {
    return this.http.get('/allMotoDistribution');
  }

}
