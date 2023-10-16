import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  name = "String"
  constructor(private audioService : AudioService){}
  
  
  ngOnInit(): void {
   
   console.log(this.name, "Hey")
  }

  

    playAudio(url: string )
    {
        const audioUrl = url;
        this.audioService.getAudioUrl(url).subscribe((url:string) => {
        
        const audioElement = new Audio(url);

        audioElement.play();
        
      })
    
    }

  }

  


