import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
  location: string = '';
  historicalData: any[] = [];

  constructor(private weatherService: WeatherService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  searchHistoricalData() {
    if (this.location) {
      this.weatherService.getLast7DaysHistoricalData(this.location).subscribe(
        (data) => {
          this.historicalData = data.list;
        },
        (error) => {
          console.error('Error fetching historical data:', error);
          this.toastr.error('Error fetching historical data');
        }
      );
    }
  }
}
