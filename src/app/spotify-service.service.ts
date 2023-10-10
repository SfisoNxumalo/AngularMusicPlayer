import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

const SpotifyApiToken = "https://accounts.spotify.com/api/token";
const SpotifyApiEndpoint = "https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B";

  const headers = new HttpHeaders()
  .append('Authorization', 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret))
  .append('content-type', 'application/x-www-form-urlencoded')

  // const token = "BQBpWO4CfTMrCg8i5PHS96_9UuDoRGHjMIr2_Vhozs_zP5seZ7-RCU4HX1pykpIH-SvWHOFK_6SZgNV9dsTrb4GoxzP2EyYoAlAfLrATE4wG5Dz1pKqqY1Aq_K9uiWwAx9SjnYUiy3OknIYNjv7itkOWuAPcQxe1p6QRg7VwABoKzyRflPB2nK0U_pp_vZcSKtOrPWDgMnI0ELnXLlrbOZCSj2gbabUQOtxBw8Ro_wq1VLx-wqU2CXXtX6WFBVExLXxzpN1HFAITkqap63Jw5ldq"

  let params: URLSearchParams = new URLSearchParams();
  params.set("grant_type", 'client_credentials')

  let body = params.toString();

@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {

  constructor(private httpClient: HttpClient) { }

  getAuth():Observable<any> {
    // console.log(body);

    // console.log(btoa(environment.client_id + ':' + environment.client_secret))
    // BQD0mUjVCZY_hCiaHYgOzaSXDuVC3MnC1EwPDggniD6HX0fI8V…kqaUCmVagPDuTpvMtyfvd-mUAXR0JLYDkO-XbJFqJeM7Fa0vY
    return this.httpClient.post(SpotifyApiToken, body, {headers: headers});
  }

  accessT = "BQCj7fZGMrh-CYvG1WAH1G8TdDfeXgv571doy6KqNRDGibblEJpytCiOMmMzjtgqIKd-cZxHVQAuDIaJmFSqufqHKhml5QYo76UiXz-ANP9sKCcetJY";

  private httpOptions={
    headers: new HttpHeaders({
      "Authorization": "Bearer " + this.accessT,
      "Accept": "application/json",
      "Content-Type": "application/json",
    })
  }

  getSongs():Observable<any>{

    // const Authenticatedheaders = new HttpHeaders();

    // Authenticatedheaders.set('Authorization', 'Bearer ' + token)
    // Authenticatedheaders.set("Accept", "application/json")
    // Authenticatedheaders.set("content-type", "application/json")

    return this.httpClient.get(SpotifyApiEndpoint, this.httpOptions);

  }
}
