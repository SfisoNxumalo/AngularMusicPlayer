import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  
  private playTrackSource = new Subject<string>();
  private pauseTrackSource = new Subject();
  private trackEndedSource = new Subject();

  playTrack$ = this.playTrackSource.asObservable();
  pauseTrack$ = this.pauseTrackSource.asObservable();
  trackEnded$ = this.trackEndedSource.asObservable();

  playTrack(previewUrl: string) {
    this.playTrackSource.next(previewUrl);
  }

  // pauseTrack() {
  //   this.pauseTrackSource.next();
  // }

  // trackEnded() {
  //   this.trackEndedSource.next();
  // }

}
