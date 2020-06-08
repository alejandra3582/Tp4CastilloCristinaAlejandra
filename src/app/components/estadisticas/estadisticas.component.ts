import { Component, OnInit } from '@angular/core';
import { Pais } from '../../models/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  pais:Pais;
  paises:Array<Pais>;

  //Formulario
  seleccion:string;
  confirmados:boolean = true;
  curados: boolean = true;
  fallecidos: boolean = true;
  buscar: boolean = false;

  //Resumen
  confirmadosInfo:string;
  curadosInfo:string;
  fallecidosInfo:string;

  constructor(private paisService:PaisService) {
    this.cargarPaises();
  }

  ngOnInit(): void {
  }

  cargarPaises(){
    this.paises = new Array<Pais>();
    for(let i = 0; i < 6; i++){
      switch(i){
        case 0: this.cargarPais("World");break;
        case 1: this.cargarPais("Argentina");break;
        case 2: this.cargarPais("USA");break;
        case 3: this.cargarPais("Spain");break;
        case 4: this.cargarPais("Italy");break;
        case 5: this.cargarPais("Germany");break;
      }
    }
  }
  public obtenerPais(){
    this.buscar = true;
    this.paisService.getEstaditica(this.seleccion).subscribe(
      (result)=>{
          this.confirmadosInfo = result['New Cases_text'];
          this.fallecidosInfo = result['New Deaths_text'];
          this.curadosInfo = result['Total Recovered_text'];
      },
      error => { alert("Error");}
    );
  }

  public cargarPais(nombrePais:string){
    this.paisService.getEstaditica(nombrePais).subscribe(
      (result)=>{
          this.pais = new Pais(
          result['Active Cases_text'],
          result['Country_text'],
          result['Last Update'],
          result['New Cases_text'],
          result['New Deaths_text'],
          result['Total Cases_text'],
          result['Total Deaths_text'],
          result['Total Recovered_text']
        );
        this.paises.push(this.pais);
      },
      error => { alert("Error");}
    );
  }
}