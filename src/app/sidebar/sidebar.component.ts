import { Component, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Song } from '../SongInterface';
import { PassSongServiceService } from '../pass-song-service.service';
import { async } from 'rxjs';
import { PlayerService } from '../player.service';
import { PlaylistService } from '../playlist.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  
  my_playlist: any
  @Output() newItemEvent = new EventEmitter<Song>();

  constructor(private songSer: PassSongServiceService, private plistService: PlaylistService ){}
  
  
  ngOnChanges(): void {
    this.getPlayList()
  }
  
  
  ngOnInit(): void {
    this.getPlayList()
  }
 
  
;



  

  selectedSong?: Song;

  mSelectedSong(song:Song){
    // this.selectedSong = song;
    this.newItemEvent.emit(song);
    this.songSer.sendSong(song);
    // this.getCurrentSong()

  }

   

  getCurrentSong(){
    this.songSer.mShowLoadedSong()
  }
  getPlayList(){
    this.plistService.getTracks().then((values)=>{
      this.my_playlist =  values
      console.log(values)
    })
  }

  async loadSong(event:any){
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    

    reader.onload = async (event:any) => {

      const track  = {
        name: selectedFile.name,
        path: event.target.result,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHaF-Os2eIoblm4ZVHpD6Segb0qd7kC5MvJuMu4CtPQqIz-MQODzbjAOi2LOFxDB3uSY&usqp=CAU"
      };
      console.log(track)

     this.plistService.saveTrack(track).then((data : any) =>{
      console.log(data)
    })
    }
   reader.readAsDataURL(selectedFile);

   setTimeout(()=>{
    this.getPlayList()
   },50)
    
  }

  
}