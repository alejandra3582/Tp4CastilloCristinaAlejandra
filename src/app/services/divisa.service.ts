import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DivisaService {

  constructor(private _http:HttpClient) { }

  public obtenerMonedaCambiada(valor:number, origen:string, destino:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'community-neutrino-currency-conversion.p.rapidapi.com',
	      'x-rapidapi-key': '66193e43dbmshf92c61dee20ca0cp12e7aejsn47f8cd29afbc'
      })
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", {'from-type':origen,'to-type':destino,'from-value':valor}, httpOptions);
  }
}
