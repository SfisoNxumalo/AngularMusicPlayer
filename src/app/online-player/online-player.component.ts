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
gottenSongs?:any;
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
    else{
      // Get Top 5 tracks
      this.mGet("BQAkK4kBjq93IF5ZwODbDpDwREjqVxfQqHBrpegyHto8zZ8axJSz1J5_1YmTLa2Q1V7sx0tBMEJCY6WdaK4Fx2tgxlwLxzye56pNKTGZ-FBv2MtJjTXtIBJgx2aBHODYeWqI4oMSOg6QBBtLYHwLJ1agOJhoJzDe8aGqPx-GhRYZA2qq9qgHYp0zBynnNZdMqVQVJCoSt_hbefsoMxE858uU0ZU1F99wvfxnT-CiiL4hizWBqd1UkVzlJCoIEmmRa7LEUT_UGCoR2SuwaF_9NqdD")
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

    mGet(token:any){
      this.spotifyService.getSongs(token).subscribe({next: (data) => {(
        this.gottenSongs = data.items
        // console.log(data)

        /*
        Object
href
: 
"https://api.spotify.com/v1/me/top/tracks?limit=5&offset=0&time_range=short_term"
items
: 
Array(5)
0
: 
album
: 
{album_type: 'SINGLE', artists: Array(1), available_markets: Array(79), external_urls: {…}, href: 'https://api.spotify.com/v1/albums/5M13djplqPTZNq7eFBPKdg', …}
artists
: 
[{…}]
available_markets
: 
(79) ['AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA']
disc_number
: 
1
duration_ms
: 
234725
explicit
: 
true
external_ids
: 
{isrc: 'GBLFP1820309'}
external_urls
: 
{spotify: 'https://open.spotify.com/track/7r7NTwtWAhPRtzylDu3hnE'}
href
: 
"https://api.spotify.com/v1/tracks/7r7NTwtWAhPRtzylDu3hnE"
id
: 
"7r7NTwtWAhPRtzylDu3hnE"
is_local
: 
false
name
: 
"Hangman"
popularity
: 
61
preview_url
: 
"https://p.scdn.co/mp3-preview/6dd02981969db21a8eeaeaadec45d0ea50030595?cid=0b297fa8a249464ba34f5861d4140e58"
track_number
: 
1
type
: 
"track"
uri
: 
"spotify:track:7r7NTwtWAhPRtzylDu3hnE"
[[Prototype]]
: 
Object
1
: 
album
: 
{album_type: 'ALBUM', artists: Array(1), available_markets: Array(79), external_urls: {…}, href: 'https://api.spotify.com/v1/albums/4GrFuXwRmEBJec22p58fsD', …}
artists
: 
[{…}]
available_markets
: 
(79) ['AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA']
disc_number
: 
1
duration_ms
: 
248946
explicit
: 
true
external_ids
: 
{isrc: 'GBUM71900574'}
external_urls
: 
{spotify: 'https://open.spotify.com/track/0FWAIRd9Uz5uNek7cALYNC'}
href
: 
"https://api.spotify.com/v1/tracks/0FWAIRd9Uz5uNek7cALYNC"
id
: 
"0FWAIRd9Uz5uNek7cALYNC"
is_local
: 
false
name
: 
"Psycho"
popularity
: 
64
preview_url
: 
null
track_number
: 
1
type
: 
"track"
uri
: 
"spotify:track:0FWAIRd9Uz5uNek7cALYNC"
[[Prototype]]
: 
Object
2
: 
{album: {…}, artists: Array(2), available_markets: Array(79), disc_number: 1, duration_ms: 287872, …}
3
: 
{album: {…}, artists: Array(2), available_markets: Array(79), disc_number: 1, duration_ms: 233368, …}
4
: 
{album: {…}, artists: Array(1), available_markets: Array(79), disc_number: 1, duration_ms: 171160, …}
length
: 
5
[[Prototype]]
: 
Array(0)
limit
: 
5
next
: 
"https://api.spotify.com/v1/me/top/tracks?limit=5&offset=5&time_range=short_term"
offset
: 
0
previous
: 
null
total
: 
34
[[Prototype]]
: 
Object
        
        */ 
        
      )},
    error: (e) => console.log(e)
  })

  console.log(this.gottenSongs)

    }
}