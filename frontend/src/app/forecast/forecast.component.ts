import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  location: string = '';
  forecastData: any[] = [];

  constructor(private weatherService: WeatherService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  searchForecast() {
    if (this.location) {
      this.weatherService.get7DayForecast(this.location).subscribe(
        (data) => {
          this.forecastData = data.list;
        },
        (error) => {
          console.error('Error fetching forecast data:', error);
          this.toastr.error('Error fetching forecast data');
        }
      );
    }
  }
}
