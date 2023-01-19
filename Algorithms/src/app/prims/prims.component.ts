import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetMaxService } from '../services/get-max.service';
@Component({
  selector: 'app-prims',
  templateUrl: './prims.component.html',
  styleUrls: ['./prims.component.css']
})
export class PrimsComponent implements OnInit {

  constructor(private getMaxService: GetMaxService) {
  }

  getMaxForm = new FormGroup({
    i1: new FormControl(''),
    i2: new FormControl('')
  })

  ngOnInit(): void {

  }

  x : any;
  getMax(i1: string, i2: string){
    this.getMaxService.getMax(i1, i2).subscribe((data)=>{
      this.x = data
    });
  }

}