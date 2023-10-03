import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Song } from './SongInterface';

@Injectable({
  providedIn: 'root'
})
export class PassSongServiceService {

  constructor() { }
  // private songData = new Subject<Song>();
  // datam = this.songData.asObservable();

  // sendSong(data:Song){
  //   console.log("sent >> " + data.Artist + " " + data.title)
  //   this.songData.next(data);
  // }

  song?: Song;

  sendSong(data:Song) {
    console.log("sent >> " + data.Artist + " " + data.title)
    this.song = data;
  }
}
