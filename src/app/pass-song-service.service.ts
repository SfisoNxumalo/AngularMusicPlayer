import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'
import { Song } from './SongInterface';

@Injectable({
  providedIn: 'root'
})
export class PassSongServiceService {

  constructor() { }
   song1:any;
   songData = new BehaviorSubject<any>({});

  sendSong(data:any){
    // console.log("sent >> " + data.name)
    this.songData.next(data);
    this.song1 = data;
  }

  song?: Song;

  mShowLoadedSong(){
    return this.songData;
  }

  mShowLoadedSong1(){
    return this.song1;
  }
}
