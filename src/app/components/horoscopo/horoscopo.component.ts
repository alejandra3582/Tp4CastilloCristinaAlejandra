import { Component, OnInit } from '@angular/core';
import { Signo } from '../../models/signo';
import { Horoscopo } from '../../models/horoscopo';

import { SignoService } from '../../services/signo.service';
import { HoroscopoService } from '../../services/horoscopo.service';
@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  signo: Signo;
  signos: Array<Signo>;
  fechaMes:string;
  horoscopo:Horoscopo;
  signoTitulo:string;
  cuerpo:string;
  constructor(private signoService: SignoService,
              private horoscopoServ: HoroscopoService) { 
                let date = new Date();
                if(date.getMonth()<10){
                  this.fechaMes = date.getFullYear()+"-0"+(date.getMonth()+1);
                }
                else{
                  this.fechaMes = date.getFullYear()+"-"+(date.getMonth()+1);
                }
                this.cargarSignos();
              }

  ngOnInit(): void {
  }

  public cargarSignos(){
    this.signoService.getSignos().subscribe(
      (result) =>{
        this.signos = new Array<Signo>();
        result.forEach(element => {
          this.signo = new Signo();
          Object.assign(this.signo, element);
          this.signos.push(this.signo);
        });
        console.log(this.signos);
      },
      error => { alert("Error en la peticion"); }
    );
  }

  public cargarHoroscopo(valor:string){
    console.log(valor + " " + this.fechaMes);
    this.signoTitulo = valor;
    this.horoscopoServ.getHoroscopoMes(valor, this.fechaMes).subscribe(
      (result) =>{
        this.horoscopo = new Horoscopo();
        Object.assign(this.horoscopo, result['result']);
      },
      errir => { alert("Error en la peticion"); }
    );
  }
}
