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
   imageController = new BehaviorSubject<any>(false);

  sendSong(data:any){
    this.songData.next(data);
  }

  sendSongCod(data:boolean){
    this.imageController.next(data);
  }

  mShowLoadedSong(){
    return this.songData;
  }

  mShowSongCod(){
    return this.imageController;
  }

  mClearPlay(){
    this.songData = new BehaviorSubject<any>({});
  }
}
