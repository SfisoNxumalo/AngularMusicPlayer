import { Component, OnInit, Input } from '@angular/core';
import { AudioService } from '../audio.service';

import { PassSongServiceService } from '../pass-song-service.service';


const audio_api = "https://localhost:3000/api/songs"

@Component({
  selector: 'app-bottom-play',
  templateUrl: './bottom-play.component.html',
  styleUrls: ['./bottom-play.component.css'],
})

export class BottomPlayComponent implements OnInit {

  song$?:any;
  constructor(private songsSer: PassSongServiceService){}

  // @Input() songLink? = "https://d288.d2mefast.net/tb/e/50/meek_mill_ft._nicki_minaj_chris_brown_all_eyes_on_you_official_video_mp3_54445.mp3?play";
  @Input() songLink? = ''
  // aud?:any;
  ngOnInit(): void {
    // this.song$ = this.songsSer.mShowLoadedSong();
    console.log(this.aud)
  }
  
  aud = new Audio(this.songLink);
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
  //  AudioCurrentTime = this.ACTimeM + ":" + this.ACTimeS;
  
  mPlayOrPause(){
    console.log(this.aud)

    if(!this.songCondition)
    {
     
      this.songCondition = true
      this.aud.play();
      console.log(this.aud.duration);
      this.AudioDuration = this.mGetAudioDuration(this.aud);
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
    return duration.replace(".", ":");
  }

  mGetAudioCurrentTime(audio:any){

    let cur = "00";

    let time = setInterval(() => {
      this.num = audio.currentTime;     

      this.count++;

      if(!this.songCondition){clearInterval(time);}
        if(audio.ended)
        {
          clearInterval(time);
          this.songCondition = false;
          this.songCon = "play_arrow";
          this.count = 0;
          cur = "00";
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
          cur = "0" + this.count
        }
        else{
          cur = String(this.count);
        }

          this.ACTimeS = cur;

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

  
  

}
