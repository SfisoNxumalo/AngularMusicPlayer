import { Component, OnInit } from '@angular/core';
import { Song } from './SongInterface';
import { BehaviorSubject, Subject } from 'rxjs'
import { PassSongServiceService } from './pass-song-service.service';
import { SpotifyServiceService } from './spotify-service.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MusicPlayer';

  constructor(private songsSer: PassSongServiceService, private ApiService: SpotifyServiceService){}
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
    // this.ApiService.getAuth().subscribe(token => {
    //   this.songArtist = token;
    //   console.log("token", token)
    // });

    // console.log(this.songArtist);

    // this.ApiService.getSongs().subscribe(songData => {
    //   console.log(songData)
    // });

    // console.log("token")
  }

  srcImage = "https://i.postimg.cc/qMbHqyms/unscreen-003.png"
  srcImage2 = "https://i.postimg.cc/pdf8HZRw/giphy-unscreen.gif"

  // CurrentSong = this.song$.value;
  songArtist = "Nothing playing";
  songTitle?:string;
  songImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHaF-Os2eIoblm4ZVHpD6Segb0qd7kC5MvJuMu4CtPQqIz-MQODzbjAOi2LOFxDB3uSY&usqp=CAU";
  songAudio?:string;

  loadNew = false;

  mChangeSongCondition(bool:boolean){
    this.loadNew = bool;
  }

  mShowSelectedSong(song:Song){
      this.songTitle = song.title
      this.songArtist = song.Artist;
      this.songImage = song.image;
      this.songAudio = song.audio;
      this.loadNew = true;
      // this.songUrl = song.Url;
  }
}
