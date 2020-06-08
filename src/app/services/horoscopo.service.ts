import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http:HttpClient) { }


  public getHoroscopoMes(signo:string, fecha:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'horoscope5.p.rapidapi.com',
	      'x-rapidapi-key': '66193e43dbmshf92c61dee20ca0cp12e7aejsn47f8cd29afbc'
      })
    }
    return this._http.get("https://horoscope5.p.rapidapi.com/career/monthly"+"?date="+fecha+"&sign="+signo, httpOptions);
  }
}
