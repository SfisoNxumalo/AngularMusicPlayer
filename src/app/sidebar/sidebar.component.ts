import { Component, Output, EventEmitter } from '@angular/core';
import { Song } from '../SongInterface';
import { PassSongServiceService } from '../pass-song-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private songSer: PassSongServiceService){};

  @Output() newItemEvent = new EventEmitter<Song>();

  songs = [
    {Artist:"dj_maphorisa_tyler_icu",title:"izolo", image:"https://e.snmc.io/i/600/w/54ab8fcf75d2260588273d8eb9dc5138/5477289/j-cole-2014-forest-hills-drive-cover-art.jpg", audio:"https://d281.d2mefast.net/tb/e/7a/dj_maphorisa_tyler_icu_izolo_official_video_ft._madumane_mpura_daliwonga_visca_mp3_56591.mp3?play"},
    {Artist:"meek_mill_ft._nicki_minaj",title:"all_eyes_on_you", image:"https://e.snmc.io/i/600/w/89be7646b4555ec1b30a1395dd4759d9/10141632/j-cole-4-your-eyez-only-Cover-Art.jpg",audio:"https://d288.d2mefast.net/tb/e/50/meek_mill_ft._nicki_minaj_chris_brown_all_eyes_on_you_official_video_mp3_54445.mp3?play"}
];

  selectedSong?: Song;

  mSelectedSong(song:Song){
    // this.selectedSong = song;
    this.newItemEvent.emit(song);
    // this.songSer.sendSong(this.selectedSong);
    // this.getCurrentSong()

  }

  

  getCurrentSong(){
    this.songSer.mShowLoadedSong()
  }

  
}