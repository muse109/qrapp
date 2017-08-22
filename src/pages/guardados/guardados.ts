import { Component } from '@angular/core';
import { HistorialProvider} from "../../providers/historial/historial";
import { scanData } from "../../models/scan-data.model";

@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial:scanData[] = [];
//AIzaSyCFJtU9Xwq9ZU99xJnmEYb0ezLwNL26w9U

  constructor( private _historialprovider : HistorialProvider) {



  }

  ionViewDidLoad(){
    this.historial = this._historialprovider.cargarHistorial();
  }


  abrir_Scan(index:number){
    this._historialprovider.abrirScan(index);
  }

}
