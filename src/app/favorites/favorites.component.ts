import { Component, EventEmitter, Output, OnInit, OnChanges } from '@angular/core';
import { PassSongServiceService } from '../pass-song-service.service';
import { PlaylistService } from '../playlist.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnChanges {


  my_favorites: any;
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private songSer: PassSongServiceService, private favoriteService: FavoriteService ){


  }

  ngOnInit(): void {
    this.getFavorites()
    console.log("From Faves")
  }
  ngOnChanges(){
    this.favoriteService.getFavorite()
  }



  getFavorites(){
    this.favoriteService.getFavorite().then((values)=>{
      this.my_favorites = values
      console.log(values)
    })
  }

  selectedSong?: any;

  mSelectedSong(song:any){
    // this.selectedSong = song;
    this.newItemEvent.emit(song);
    this.songSer.sendSong(song);
    this.songSer.sendSongCod(true);
    // this.getCurrentSong()

  }

  trimSongText(songT:string):string{

    if(songT.length > 20){

      return (songT.substring(0, 20) + "...")

    }

    return songT

  }

  



}
