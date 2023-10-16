import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalPLayerComponent } from './local-player/local-player.component';
import { OnlinePLayerComponent } from './online-player/online-player.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

const routes: Routes = [
  {path: "", redirectTo:"/Local", pathMatch:"full"},
  {path: 'Local', component:LocalPLayerComponent},
  {path: 'Online', component: OnlinePLayerComponent},
  {path: 'Favorites', component:FavoritesComponent},
  {path: "audio", component:AudioPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
