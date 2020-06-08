import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private _http:HttpClient) { }

  public getEstaditica(pais: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key': '66193e43dbmshf92c61dee20ca0cp12e7aejsn47f8cd29afbc'
      })
    };
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1/"+ pais, httpOptions);
  }
}
