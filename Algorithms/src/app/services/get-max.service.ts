import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetMaxService {

  url = "http://localhost:8080/api/maxInArray?";

  constructor(private http: HttpClient) { }

  getMax(i1: string, i2: string){
    return this.http.get(`http://localhost:8080/api/max?x=${i1}&y=${i2}`)
  }

  getMaxFromArray(arr: number[]){
    for (let index = 0; index < arr.length; index++) {
      this.url = this.url + "arr=" + arr[index]+"&"
    }
    return this.http.post(this.url, arr);
  }
}

