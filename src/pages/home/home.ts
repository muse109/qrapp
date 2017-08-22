import { Component } from '@angular/core';

//componentes
import { ToastController, Platform } from 'ionic-angular';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//servicios
import { HistorialProvider } from "../../providers/historial/historial";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform: Platform,
              private historialProvider : HistorialProvider) {

  }


scan(){
  console.log("realizando Scan");

  if(!this.platform.is('cordova')){
  //this.historialProvider.agregarHistorial("http://google.com");
    this.historialProvider.agregarHistorial("geo: 6.231198413123302, -75.16494601445311");
    return;
  }

  this.barcodeScanner.scan().then((barcodeData) => {
   // Success! Barcode data is here

   console.log("We got a barcode\n" +
                "Result: " + barcodeData.text + "\n" +
                "Format: " + barcodeData.format + "\n" +
                "Cancelled: " + barcodeData.cancelled);

                if(barcodeData.cancelled === false || barcodeData.text !== null){
                    this.historialProvider.agregarHistorial(barcodeData.text);
                }


  }, (err) => {
      // An error occurred
      this.mostrarError("Error: "+ err);
      console.log(err);
  });

}

mostrarError(mensaje:string){

    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 1500,
      position: 'bottom'
    });

    toast.present();


}


}
