import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

info;
infoList;
city: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private data: DataProvider) {
    

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  onSelectChange(selectedValue : any){
    if(this.city === "P")
    this.data.getData().subscribe(data=>{
      this.info = data;
      console.log(this.info);
      this.infoList = this.info;
})

  else if(this.city ==="J")
  this.data.getResult().subscribe(data=>{
    this.info = data;
    console.log(this.info);
    this.infoList = this.info;
  })

  else if(this.city ==="D")
  this.data.getWeatherD().subscribe(data=>{
    this.info = data;
    console.log(this.info);
    this.infoList = this.info;
  })

  else if(this.city ==="C")
  this.data.getWeatherC().subscribe(data=>{
    this.info = data;
    console.log(this.info);
    this.infoList = this.info;
  })
}
    }
  