import { Component } from '@angular/core';
import {  NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat:number;
  lng:number;

  constructor(public navParams: NavParams, private view: ViewController) {


    //this.lat = 6.217;
    //this.lng = -75.567;

    let coordsArray =  this.navParams.get("coords").split(",");

    this.lat = Number(coordsArray[0].replace("geo:", ""));
    this.lng = Number(coordsArray[1]);

    console.log(this.lat, this.lng);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }


CerrarModal(){
  this.view.dismiss();
}
}
