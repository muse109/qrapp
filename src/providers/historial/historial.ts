import { Injectable } from '@angular/core';
import { scanData} from "../../models/scan-data.model";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController} from "ionic-angular";
import { MapaPage} from "../../pages/mapa/mapa";


@Injectable()
export class HistorialProvider {

  private _historial:scanData[]=[];

  constructor(private iab: InAppBrowser,
              private modal:ModalController) {
    console.log('Hello HistorialProvider Provider');
  }


  abrirScan(index:number){

    let scandata:scanData = this._historial[index];
    console.log(scandata);

    switch(scandata.tipo){
      case "http":
      this.iab.create(scandata.info,"_system");
      break
      case "mapa":
     let modal =   this.modal.create(MapaPage, { coords:scandata.info});
     modal.present();

      break
      default:
        console.log("Tipo no soportado");
    }

  }

agregarHistorial(texto:string){

let data = new scanData(texto);

this._historial.unshift(data);
console.log(this._historial);

this.abrirScan(0);

}

  cargarHistorial(){
    return this._historial;
  }

}
