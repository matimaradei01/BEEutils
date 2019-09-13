import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeguimientoTrackersComponent } from './seguimiento-trackers/seguimiento-trackers.component';

const routes: Routes = [
  { path: 'seguimiento-tracker', component: SeguimientoTrackersComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TrackersRoutingModule { }
