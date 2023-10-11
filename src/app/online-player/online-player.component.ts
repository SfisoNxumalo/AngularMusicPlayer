import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SpotifyServiceService } from '../spotify-service.service';
import { TokenDetails } from 'src/TokenDetails';
import { Token } from '@angular/compiler';

const LocalTokenKey = "Token"

@Component({
  selector: 'app-online-player',
  templateUrl: './online-player.component.html',
  styleUrls: ['./online-player.component.css']
})
 

export class OnlinePLayerComponent implements OnInit{
  constructor(private spotifyService:SpotifyServiceService){};

  AccessToken = "";
  // tokenDetails?:TokenDetails;

ngOnInit(): void {
 const token = localStorage.getItem(LocalTokenKey)

 if(token){
  
  const tokenDetails:TokenDetails = { 
    Token:"BQCj7fZGMrh-CYvG1WAH1G8TdDfeXgv571doy6KqNRDGibblEJpytCiOMmMzjtgqIKd-cZxHVQAuDIaJmFSqufqHKhml5QYo76UiXz-ANP9sKCcetJY", 
    Date: this.mGetTime() };

  localStorage.setItem(LocalTokenKey, JSON.stringify(tokenDetails))

    console.log("Generated Token")
 }
 else{

  this.AccessToken = JSON.parse(localStorage.getItem(LocalTokenKey) || "");
  console.log(this.AccessToken)
 }

}

mGetTime():string{

  const dt_date = new Date()
        let hour = dt_date.getHours();
        let min = dt_date.getMinutes();
        let sec = dt_date.getSeconds();

        let HourH = String(hour), MinM = String(min), SecS = String(sec);

        if(hour < 10)
        {
          HourH = "0" + hour;
        }
        
        if(min < 10)
        {
          MinM = "0" + min;
        }

        if(sec < 10)
        {
          SecS = "0" + sec;
        }

        const displayTime = HourH + ":" + MinM + ":" + SecS;

        console.log(displayTime)

  return displayTime;
}

mGenerateToken(){
    this.spotifyService.getGenerateToken().subscribe(token => {
      
    });
}

}
