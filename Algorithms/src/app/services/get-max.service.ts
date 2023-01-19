import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetMaxService {

  constructor(private http: HttpClient) { }

  getMax(i1: string, i2: string){
    return this.http.get(`http://localhost:8080/api/max?x=${i1}&y=${i2}`)
  }
}
