import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>( baseUrl + 'api/SampleData/WeatherForecasts' )
      .subscribe( result =>
      {this.forecasts = result;
    }, error => console.error(error));
  }
  sampleData: Array<WeatherForecast> = [{ "dateFormatted": "3/30/2021", "temperatureC": 28, "summary": "Balmy", "temperatureF": 82 }, { "dateFormatted": "3/31/2021", "temperatureC": -3, "summary": "Bracing", "temperatureF": 27 }, { "dateFormatted": "4/1/2021", "temperatureC": 41, "summary": "Sweltering", "temperatureF": 105 }, { "dateFormatted": "4/2/2021", "temperatureC": 52, "summary": "Balmy", "temperatureF": 125 }, { "dateFormatted": "4/3/2021", "temperatureC": 35, "summary": "Chilly", "temperatureF": 94 }];
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

