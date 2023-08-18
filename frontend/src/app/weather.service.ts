import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '4b4b8821d90f653cc10d5357d6474561';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  private apiUrl1='https://history.openweathermap.org/data/2.5'
  constructor(private http: HttpClient) { }

  getCurrentWeatherByCoords(latitude: number, longitude: number): Observable<any> {
    const url = `${this.apiUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

  getCurrentWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
  get7DayForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric&cnt=7`;
    return this.http.get(url);
  }

  getLast7DaysHistoricalData(city: string): Observable<any> {
    const currentDate = new Date();
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
    const startDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate() - 7);
  
    const startUnixTime = Math.round(startDate.getTime() / 1000);
    const endUnixTime = Math.round(endDate.getTime() / 1000);

    const url = `${this.apiUrl1}/history?q=${city}&start=${startUnixTime}&end=${endUnixTime}&appid=${this.apiKey}&units=metric`;

    return this.http.get(url);
  }  
}
