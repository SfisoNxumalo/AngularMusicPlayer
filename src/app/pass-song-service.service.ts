import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'
import { Song } from './SongInterface';

@Injectable({
  providedIn: 'root'
})
export class PassSongServiceService {

  constructor() { }
   songData = new BehaviorSubject<any>({});
  // datam = this.songData.asObservable();
  new = "";

  sendSong(data:any){
    console.log("sent >> " + data.Artist + " " + data.title)
    this.songData.next(data);
    // this.song = data;
    this.new = "newwwww"
  }

  song?: Song;

  // sendSong(data:Song) {
  //   console.log("sent >> " + data.Artist + " " + data.title);
  //   this.mAlert();
  //   this.song = data;
  // }

  mShowLoadedSong(){
    // return 
    console.log("retrieved >> " + this.songData)
  }
}
