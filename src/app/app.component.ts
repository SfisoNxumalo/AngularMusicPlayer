import { Component } from '@angular/core';
import { Song } from './SongInterface';
import { PassSongServiceService } from './pass-song-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicPlayer';

  constructor(private songsSer: PassSongServiceService){}

  srcImage = "https://i.postimg.cc/qMbHqyms/unscreen-003.png"
  srcImage2 = "https://i.postimg.cc/pdf8HZRw/giphy-unscreen.gif"

  songTitle = '';
  songArtist = '';

  song?: Song;

  mShowSelectedSong(){

    this.song = this.songsSer.song;

    if(this.song){
      this.songTitle = this.song?.title; 
      this.songArtist = this.song?.Artist;
    }
  }
}
