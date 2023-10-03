import { Component, OnInit } from '@angular/core';
import { Song } from './SongInterface';
import { BehaviorSubject, Subject } from 'rxjs'
import { PassSongServiceService } from './pass-song-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MusicPlayer';

  constructor(private songsSer: PassSongServiceService){}
  // song$ = this.songsSer.mShowLoadedSong();

  play(value?:string):string{
    if(value){
      return "img-wavv"
    }
    else {
      return "img-wav"
    }
  }
  
  ngOnInit(): void {
  }

  srcImage = "https://i.postimg.cc/qMbHqyms/unscreen-003.png"
  srcImage2 = "https://i.postimg.cc/pdf8HZRw/giphy-unscreen.gif"

  // CurrentSong = this.song$.value;
  
  songArtist = "Nothing playing";
  songTitle?:string;
  songImage?:string;
  songAudio?:string;

  mShowSelectedSong(song:Song){
      this.songTitle = song.title
      this.songArtist = song.Artist;
      this.songImage = song.image;
      this.songAudio = song.audio;
      // this.songUrl = song.Url;
  }
}
