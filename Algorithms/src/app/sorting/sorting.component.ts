import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { delay, timer } from 'rxjs';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  constructor() { }

  data: number[] = []

  index: number[] = []



  ngOnInit(): void {

    for (let i = 0; i < 80; i++) {
      this.data[i] = Math.random()*1000;
      this.index[i] = i;
    }

    this.initFunc();


}

initFunc(){
  var chartDom = document.getElementById('main')!;
  var myChart = echarts.init(chartDom);
  var option = {
  xAxis: {
  type: 'category',
  data: this.index
},
  yAxis: {
  type: 'value'
},
series: [
  {
    data: this.data ,
    type: 'bar'
  }
]
};

option && myChart.setOption(option);
}

sortData(){
  this.basicSort(this.data, this.index);
  

}
delay(milliseconds:any){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}
async basicSort(arr:number[], index:number[]){
  for (let i = arr.length-1; i >=0 ; i--){
    var max = i;
    for (let j = i; j >=0 ; j--) {
      max = arr[j] > arr[max] ? j : max;
    }
    //change value
    let x = arr[max];
    arr[max] = arr[i];
    arr[i] = x;
    //change index
    let y = max;
    index[i] = index[max];
    await this.delay(300);
    this.initFunc();
  }
}

}
