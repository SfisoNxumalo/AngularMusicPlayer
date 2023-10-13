import { Component } from '@angular/core';
import { AudioService } from '../audio.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { PlaylistService } from '../playlist.service';
import { Song } from '../SongInterface';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {
  
  Tracks: any[] =[];
  ngOnInit(): void{
    // this.getTracks()
  }
  constructor(private playlistService : PlaylistService, private route: ActivatedRoute){}
  
  // getTracks(){
  //   this.playlistService.getTracks().then({
  //     next: (data)=>{(
  //       this.Tracks = data.reverse()
  //       )},
  //     error: (e)=> console.log(e)
  //   })
  // }

  // loadSong(event:any){
  //   const selectedFile = event.target.file[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(selectedFile);
  //   console.log(selectedFile)

  //   reader.onload = async (event:any) => {

  //     const track  = {
  //       name: selectedFile.name,
  //       path: event.target.result
  //     };
  //     console.log(track);

  //   this.playlistService.saveTrack(track)
  //   }
  // }
    


}
