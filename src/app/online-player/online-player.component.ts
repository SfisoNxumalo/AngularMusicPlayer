import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SpotifyServiceService } from '../spotify-service.service';
import { TokenDetails } from 'src/TokenDetails';
import { TokenInt } from 'src/TokenInterface';

const LocalTokenKey = "Token"

@Component({
  selector: 'app-online-player',
  templateUrl: './online-player.component.html',
  styleUrls: ['./online-player.component.css']
})
 


export class OnlinePLayerComponent implements OnInit{
  constructor(private spotifyService:SpotifyServiceService){};

  AccessToken?:TokenDetails;
  // tokenDetails?:TokenDetails;

  list?:TokenInt;

ngOnInit(): void {
 const token = localStorage.getItem(LocalTokenKey)
 
 if(!token)
 {
  this.mGenerateToken();
}
 else
 {

  this.AccessToken = JSON.parse(localStorage.getItem(LocalTokenKey) || "");

  if(this.AccessToken){

    const dddDate = new Date();

    if(dddDate.getTime() > this.mGetTime(true, this.AccessToken?.Date).getTime()){
      this.mGenerateToken()
    }
  }
 }

}

mGetTime(value:boolean, date:string):any {

  const displayTime = new Date();

  try
  {
      if(value){
        const dddDate = new Date(date);

        const addHour = 1 * 60 * 60 * 1000;

        displayTime.setTime(dddDate.getTime() + addHour)

      }
  }
  catch(error){
    alert("FAILED! " + error)
  }

  return displayTime;
}

mSaveToken(token:any):boolean{
  try
  {
    const tokenDetails:TokenDetails = { 
      Token:token, 
      Date: this.mGetTime(false, "") 
    };

    localStorage.setItem(LocalTokenKey, JSON.stringify(tokenDetails));

    return true
  }
  catch(error){
alert("FAILED! " + error)
  }
  
  return false;

}

    mGenerateToken() {
      this.spotifyService.getGenerateToken().subscribe(token => {
        this.list = token;  
        
        if(this.mSaveToken(this.list?.access_token)){
          alert("Generated and Saved a Token")
        }
        else{
          alert("Failed to Generated and Saved a new Token")
        }
    },
    error =>{
      console.log("gdgdgdggdgdgd",error)
    })

    }
}