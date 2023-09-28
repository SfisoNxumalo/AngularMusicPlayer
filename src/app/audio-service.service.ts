import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioServiceService {

  constructor(private http : HttpClient) { }

  getAudioUrl(url:string){
    return this.http.get<string>(`http://localhost:3000/api/song/${url}`);
  }

  getAllSongs(){
    
    return this.http.get<any[]>(student_api+"getStudents")
  }

  
}
