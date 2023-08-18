import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  location: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // Load weather data for the user's current location
    this.loadCurrentWeather();
  }

  loadCurrentWeather() {
    // Use browser's Geolocation API to get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Call the weather service to get current weather data
        this.weatherService.getCurrentWeatherByCoords(latitude, longitude).subscribe(
          (data) => {
            this.weatherData = data;
          },
          (error) => {
            console.error('Error fetching weather data:', error);
            this.toastr.error('Error fetching weather data');
          }
        );
      });
    } else {
      this.toastr.warning('Geolocation is not available');
    }
  }

  searchWeather() {
    // Call the weather service to get weather data for the searched location
    if (this.location) {
      this.weatherService.getCurrentWeatherByCity(this.location).subscribe(
        (data) => {
          this.weatherData = data;
        },
        (error) => {
          console.error('Error fetching weather data:', error);
          this.toastr.error('Error fetching historical data: ' + JSON.stringify(error));
        }
      );
    }
  }
}
