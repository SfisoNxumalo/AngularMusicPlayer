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
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private songSer: PassSongServiceService, private plistService: PlaylistService ){}
  
  
  ngOnChanges(): void {
    this.getPlayList()
  }
  
  
  ngOnInit(): void {
    this.getPlayList()
  }

  selectedSong?: any;

  mSelectedSong(song:any) {

    if(!this.deleted)
    {
        this.newItemEvent.emit(song);
        this.songSer.sendSong(song);
        this.songSer.sendSongCod(true);
    }

    this.deleted = false
  }

  getCurrentSong(){
    this.songSer.mShowLoadedSong()
  }

  getPlayList(){
    this.plistService.getTracks().then((values)=>{
      this.my_playlist = values
      // console.log(values)
    })
  }

  deleted = false;

  mDeletedSong(song:any){

    let boolean = confirm("delete this Song")

      if(boolean)
      {
        let lis: any[] = []

          this.plistService.deleteTrack(song.id).then(() => {
            this.newItemEvent.emit({});
            this.songSer.sendSong({});
            this.songSer.sendSongCod(true);
            this.songSer.mClearPlay();

            
            for(let play of this.my_playlist){
              if(song.id != play.id){
                  lis.push(play);
              }
              
              

            }
            this.my_playlist = lis;

        })
      }
    

  }

  async loadSong(event:any){
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = async (event:any) => {

      const track  = {
        name: selectedFile.name,
        path: event.target.result,
        liked:false,
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHaF-Os2eIoblm4ZVHpD6Segb0qd7kC5MvJuMu4CtPQqIz-MQODzbjAOi2LOFxDB3uSY&usqp=CAU"
      };

      this.plistService.saveTrack(track).then((data : any) =>{
        console.log(data)
      })

      // this.my_playlist.push(track)

      this.newItemEvent.emit(track);
      this.songSer.sendSong(track);
    }

   reader.readAsDataURL(selectedFile);

   setTimeout(()=>{
    this.getPlayList()
   }, 50)
    
  }

  trimSongText(songT:string):string{

    if(songT.length > 20){

      return (songT.substring(0, 20) + "...")

    }

    return songT

  }

  

  
}