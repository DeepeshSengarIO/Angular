import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { weather } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private weatherService: WeatherService){

  }

  cityName:string = 'Riga';
  tempName = ''; 
  weatherData?: weather;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit(){
    this.cityName = this.tempName;
    this.getWeatherData(this.cityName);
    this.tempName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response
        console.log(response);
      }
    })
  }
  
}
