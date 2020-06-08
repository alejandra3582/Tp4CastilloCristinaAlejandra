import { Component, OnInit } from '@angular/core';
import { DivisaService } from '../../services/divisa.service';


@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  cantidad:number;
  origen:string;
  destino:string;
  resultado:string;

  constructor(private divisaService:DivisaService) { }

  ngOnInit(): void {
  }

  public convertir(){
    this.divisaService.obtenerMonedaCambiada(this.cantidad, this.origen, this.destino).subscribe(
      (result) =>{
        this.resultado = result['result'];
        console.log("RESULT " + this.resultado);
      },
      error => { alert("Error en la peticion");}
    );
  }
}
