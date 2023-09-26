import { Component } from '@angular/core';


@Component({
  selector: 'app-bottom-play',
  templateUrl: './bottom-play.component.html',
  styleUrls: ['./bottom-play.component.css']
})

export class BottomPlayComponent {

  songCondition = false;
  songCon = "play_arrow"

  num = 0;

  mMoveSlider($event: any) {
    this.num++;
    console.log(this.num);
  }

   aud = new Audio("https://d201.d2mefast.net/tb/9/e8/nasty_c_endless_official_video_mp3_46042.mp3?play");
  //  aud = new Audio("https://d216.d2mefast.net/tb/8/e7/lil_durk_all_my_life_ft._j._cole_official_video_mp3_47620.mp3?play");
   AudioDuration = "00:00";
   audD = 0;

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

  mGetAudioDuration(audio:any):string{
    let duration = (Number(audio.duration) / 60).toFixed(2);
    return duration.replace(".", ":");
  }

  mGetAudioCurrentTime(audio:any){

    let count = 0;
    let cur = "00";

    setInterval(() => {
      this.num = audio.currentTime;

      let curr = audio.currentTime.toFixed(0);
      count++;

      if(curr % 60 == 0){

        count = 0;
        let out = String(curr / 60);

        if(out.length < 2){
            out = "0"+ out;
        }

        this.ACTimeM = out;
      }

        if(count < 10){
          cur = "0" + count
        }
        else{
          cur = String(count);
        }

        this.ACTimeS = cur;
      

    },1000);
  }

  
  

}
