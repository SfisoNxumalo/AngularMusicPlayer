import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';


const audio_api = "https://localhost:3000/api/songs"

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(
    private http: HttpClient
  ) { }

  post(data:any): Observable<any> {
    return this.http.post(
      audio_api + "upload",
      data
    );
  }
  getAllSongs(){
    
    return this.http.get<any[]>(audio_api+"getSongs")
  }
}
