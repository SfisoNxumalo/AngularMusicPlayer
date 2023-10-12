import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

const SpotifyApiToken = "https://accounts.spotify.com/api/token";
const SpotifyApiEndpoint = "https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B";

  @Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {

  constructor(private httpClient: HttpClient) { }

  getGenerateToken():Observable<any> {

    const headers = new HttpHeaders()
  .append('Authorization', 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret))
  .append('content-type', 'application/x-www-form-urlencoded')

  let params: URLSearchParams = new URLSearchParams();
  params.set("grant_type", 'client_credentials')

  let body = params.toString();

    return this.httpClient.post(SpotifyApiToken, body, {headers: headers});
  }

  // accessT = "BQCj7fZGMrh-CYvG1WAH1G8TdDfeXgv571doy6KqNRDGibblEJpytCiOMmMzjtgqIKd-cZxHVQAuDIaJmFSqufqHKhml5QYo76UiXz-ANP9sKCcetJY";

   

  getSongs(token:any):Observable<any>{

    // const Authenticatedheaders = new HttpHeaders();

    // Authenticatedheaders.set('Authorization', 'Bearer ' + token)
    // Authenticatedheaders.set("Accept", "application/json")
    // Authenticatedheaders.set("content-type", "application/json")

    const httpOptions={
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Accept": "application/json",
        "Content-Type": "application/json",
      })
    }

    return this.httpClient.get(SpotifyApiEndpoint, httpOptions);

  }
}
