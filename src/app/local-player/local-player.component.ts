import { Component, OnChanges, Input, OnInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

import { PassSongServiceService } from '../pass-song-service.service';

@Component({
  selector: 'app-local-player',
  templateUrl: './local-player.component.html',
  styleUrls: ['./local-player.component.css']
})
export class LocalPLayerComponent implements OnInit, OnChanges{

  constructor(private passSongService:PassSongServiceService){}
  
  song:any;
  
  @Input() blLoaded?:boolean;
  div = 'none-play'

  ngOnInit(): void {
  }

  ngAfterViewInit(){


    this.passSongService.mShowLoadedSong().subscribe(song =>{
      this.songArtist = song.name

      if(song.name){
        // const wavesurfer = WaveSurfer.create({
        //   container: '#img-div',
        //   waveColor: 'white',
        //   progressColor: '#becab6',
        //   url: song.path,
        //   minPxPerSec: 320,
        //   hideScrollbar: true
        // })

        // wavesurfer.load(song.path)
        // wavesurfer.playPause()
    }

    })

    this.passSongService.mShowSongCod().subscribe(condition => {
      
      if(condition){

        this.srcImage2 = "https://i.postimg.cc/pdf8HZRw/giphy-unscreen.gif"
        this.div = ''
        }
        else {
          this.srcImage2 = ""
          this.div = 'none-play'
        }
    

    });

    this.blLoaded
  
    alert(this.song.name)
  }

  ngOnChanges(): void {

  }
  
  @Input() songArtist = "..";
  songTitle = ".."
  songImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHaF-Os2eIoblm4ZVHpD6Segb0qd7kC5MvJuMu4CtPQqIz-MQODzbjAOi2LOFxDB3uSY&usqp=CAU";
  songAudio?:string;

  srcImage = "https://i.postimg.cc/qMbHqyms/unscreen-003.png"
  srcImage2 = ""


}
