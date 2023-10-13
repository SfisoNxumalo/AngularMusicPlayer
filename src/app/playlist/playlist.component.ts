import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';
//import * as mm from 'music-metadata';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
 playList:any=[]
  playlistService: any;
 
  constructor(private playlist: PlaylistService){
  }

 
  ngOnInit(): void {
   this.loadPlaylist()
  }

  loadPlaylist(){
     this.playlist.getTracks().then(
      (tracks)=>{
        this.playList = tracks
      }
    )
    .catch((err)=>{
      console.log("Couldn't get playlist from db")
    })
  }


}