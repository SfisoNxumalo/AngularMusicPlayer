import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AudioService } from '../audio.service';

import { PassSongServiceService } from '../pass-song-service.service';


const audio_api = "https://localhost:3000/api/songs"

@Component({
  selector: 'app-bottom-play',
  templateUrl: './bottom-play.component.html',
  styleUrls: ['./bottom-play.component.css'],
})

export class BottomPlayComponent implements OnChanges{

  song$?:any;
  constructor(private songsSer: PassSongServiceService){}

  // @Input() songLink? = "https://d288.d2mefast.net/tb/e/50/meek_mill_ft._nicki_minaj_chris_brown_all_eyes_on_you_official_video_mp3_54445.mp3?play";
  // @Input() songLink? = ''
  @Input() blLoaded?:boolean;
  @Output() newPlayNew = new EventEmitter<boolean>();

  selectedSong:any = {path:""}
  // aud?:any;

  ngOnChanges(){
    
    this.songsSer.mShowLoadedSong().subscribe(song => {
      this.selectedSong = song
    });

    if(this.blLoaded){
      this.mPlayOrPause();
    }

  }

  aud = new Audio(this.selectedSong.path);
  AudioDuration = "00:00";
   audD = 0;

   songCondition = false;

   loopSong = false;
   loopClass = ""

   FavouriteSong = false;
   heartClass = "";


   songCon = "play_arrow"
   loopSongIco = "repeat"
 
   num = 0;
  count = 0;

   mDragged(event: any){
    this.aud.currentTime = event.value;
    this.num = this.aud.currentTime;
    
    let cur = "00";

    let curr = Number(this.aud.currentTime.toFixed(0));
    
      this.count++;

      if(curr % 60 == 0){

        this.count = 0;
        let out = String(curr / 60);

        if(out.length < 2){
            out = "0"+ out;
        }

        this.ACTimeM = out;
      }

      if(this.count < 10){
        cur = "0" + this.count
      }
      else{
        cur = String(this.count);
      }

        this.ACTimeS = cur;
   }

   ACTimeM = "00"
   ACTimeS = "00"

  mPlayOrPause(){

    if(this.blLoaded) 
    {
      
      clearInterval(this.time);
      this.songCondition = false;
      this.songCon = "play_arrow";
      this.count = 0;
      this.cur = "00";

      // this.blLoaded = false;
      this.newPlayNew.emit(false);
      this.aud.load();
      this.aud = new Audio(this.selectedSong.path);
      this.songCondition = false;
    }
    
    if(!this.songCondition)
    {
        this.songCondition = true
        this.aud.play();
        // this.AudioDuration = this.mGetAudioDuration(this.aud);
        this.mGetAudioCurrentTime(this.aud);
        this.audD = this.aud.duration;
        this.songCon = "pause"
    }
    else{
      this.aud.pause();
      this.songCondition = false;
      this.songCon = "play_arrow";
    }
  }

  mLoop(){
    if(this.loopSong){
      this.loopSongIco = "repeat"
      this.loopSong = false;
      this.aud.loop = false;
      
      this.loopClass = ""
    }
    else{
      this.loopSongIco = "repeat_one"
      this.loopSong = true;
      this.aud.loop = true;
      this.loopClass = "loop"
    }

  }

  mGetAudioDuration(audio:any):string {

    let duration = (Number(audio.duration) / 60).toFixed(2);
    // console.log(audio.duration)
    // console.log(duration)
    return duration.replace(".", ":");
  }

  time?:any;
  cur = "00";

  mGetAudioCurrentTime(audio:any){

      this.time = setInterval(() => {
      this.num = audio.currentTime;     

      this.count++;

      if(!this.songCondition){clearInterval(this.time);}
      
      this.AudioDuration = this.mGetAudioDuration(this.aud);
      this.audD = this.aud.duration;

        if(audio.ended)
        {
          clearInterval(this.time);
          this.songCondition = false;
          this.songCon = "play_arrow";
          this.count = 0;
          this.cur = "00";
        }

        let curr = audio.currentTime.toFixed(0);

        if(curr % 60 == 0){

          this.count = 0;
          let out = String(curr / 60);

          if(out.length < 2){
              out = "0"+ out;
          }

          this.ACTimeM = out;
        }

        if(this.count < 10){
          this.cur = "0" + this.count
        }
        else{
          this.cur = String(this.count);
        }

          this.ACTimeS = this.cur;

    },1000);
  }

  favIco = "favorite_border"

  mFavourite(){

    if(!this.FavouriteSong){
      this.favIco = "favorite";
      this.FavouriteSong = true;
      this.heartClass = "heart"

    }
    else{
      this.favIco = "favorite_border";
      this.FavouriteSong = false;
      this.heartClass = "";

    }

  }

  // loadSong(event:any){
  //   const selectedFile = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(selectedFile);

  //   reader.onload = async (event:any) => {
  //     console.log(event.target.result);
  //     // const track: Track = {
  //     //   name: selectedFile.name,
  //     //   path: 
  //     // }
  //   }

  // }

  
  

}
