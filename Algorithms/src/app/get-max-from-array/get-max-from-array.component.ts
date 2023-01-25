import { Component, OnInit } from '@angular/core';
import { GetMaxService } from '../services/get-max.service';

@Component({
  selector: 'app-get-max-from-array',
  templateUrl: './get-max-from-array.component.html',
  styleUrls: ['./get-max-from-array.component.css']
})
export class GetMaxFromArrayComponent implements OnInit {

  inputString!: string;
  largestElement!: any;
  constructor( private getMaxService: GetMaxService) { }

  ngOnInit(): void {
  }

  x!:any;
  getMaximumInArray(t: string){
    const inputList = t.split(',').map(str => +str);
    console.log(inputList);
    this.largestElement = this.getMaxService.getMaxFromArray(inputList).subscribe((data)=>{
      console.log(data);
      this.x = data;
    })
  }

}
