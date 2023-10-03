import { Component } from '@angular/core';
import { AudioService } from '../audio.service';


const audio_api = "https://localhost:3000/api/songs"

@Component({
  selector: 'app-bottom-play',
  templateUrl: './bottom-play.component.html',
  styleUrls: ['./bottom-play.component.css'],
})




export class BottomPlayComponent {

  //  aud = new Audio("https://d201.d2mefast.net/tb/9/e8/nasty_c_endless_official_video_mp3_28738.mp3?play");
   aud = new Audio("https://d289.d2mefast.net/tb/e/93/cassper_nyovest_phumakim_official_music_video_mp3_33219.mp3?play");
  //  aud = new Audio("https://d216.d2mefast.net/tb/8/e7/lil_durk_all_my_life_ft._j._cole_official_video_mp3_47620.mp3?play");
   AudioDuration = "00:00";
   audD = 0;

   songCondition = false;
   loopSong = false;
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

    

    if(!this.songCondition){
     
      this.songCondition = true
      this.aud.play();
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
    }
    else{
      this.loopSongIco = "repeat_one"
      this.loopSong = true;
      this.aud.loop = true;
    }

  }

  mGetAudioDuration(audio:any):string{
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

  
  

}
