import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
    this.getData();
  }
  getData(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Pretoria&&APPID=bfff5d6643f92da313f9b4336349c2af');
}
  getResult(){
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Johannesburg&&APPID=bfff5d6643f92da313f9b4336349c2af');
}
getWeatherD(){
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Durban&&APPID=bfff5d6643f92da313f9b4336349c2af');
}
getWeatherC(){
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=CapeTown&&APPID=bfff5d6643f92da313f9b4336349c2af');
}
}