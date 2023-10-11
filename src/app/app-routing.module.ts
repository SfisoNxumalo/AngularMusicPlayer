import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalPLayerComponent } from './local-player/local-player.component';
import { OnlinePLayerComponent } from './online-player/online-player.component';

const routes: Routes = [
  {path: "", redirectTo:"/Local", pathMatch:"full"},
  {path: 'Local', component:LocalPLayerComponent},
  {path: 'Online', component: OnlinePLayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
