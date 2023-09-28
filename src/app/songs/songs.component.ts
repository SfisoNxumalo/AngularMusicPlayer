import { Component } from '@angular/core';
import { AudioService } from '../audio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {
  
  Tracks: any[] =[];
  ngOnInit(): void{
    this.getAllSongs()
  }
  constructor(private audioService : AudioService, private route: ActivatedRoute){}
  
  getAllSongs(){
    this.audioService.getAllSongs().subscribe({
      next: (data)=>{(
        this.Tracks = data.reverse()
        )},
      error: (e)=> console.log(e)
    })
  }
    


}
