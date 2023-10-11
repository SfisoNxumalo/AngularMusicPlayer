import { Component } from '@angular/core';

@Component({
  selector: 'app-local-player',
  templateUrl: './local-player.component.html',
  styleUrls: ['./local-player.component.css']
})
export class LocalPLayerComponent {

  songArtist = "J cole";
  songTitle = "Love yours"
  songImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHaF-Os2eIoblm4ZVHpD6Segb0qd7kC5MvJuMu4CtPQqIz-MQODzbjAOi2LOFxDB3uSY&usqp=CAU";
  songAudio?:string;

  srcImage = "https://i.postimg.cc/qMbHqyms/unscreen-003.png"
  srcImage2 = "https://i.postimg.cc/pdf8HZRw/giphy-unscreen.gif"

  play(value?:string):string{
    if(value){
      return "img-wavv"
    }
    else {
      return "img-wav"
    }
  }
  

}
