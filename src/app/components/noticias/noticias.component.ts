import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticia:Noticia;
  listaNoticias:Array<Noticia>;

  titulo:string;
  cuerpo:string;

  constructor(private noticiaService: NoticiaService) { 
    this.cargarListaNoticias();
  }

  ngOnInit(): void {
  }

  public mostrarNoticia(item:Noticia){
    this.titulo = item.tit;
    this.cuerpo = item.con;
  }

  public cargarListaNoticias(){
    this.noticiaService.getNoticias("soccer").subscribe(
      (result) =>{
        this.listaNoticias = new Array<Noticia>();
        result['arts'].forEach(element => {
          this.noticia = new Noticia();
          Object.assign(this.noticia, element);
          this.listaNoticias.push(this.noticia);
        });
        console.log(this.listaNoticias);
      },
      error => { alert("Error en la peticion noticias"); }
    );
  }
}
