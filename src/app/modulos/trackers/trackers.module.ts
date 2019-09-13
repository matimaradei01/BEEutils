import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrackersRoutingModule} from './trackers-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { SeguimientoTrackersComponent } from './seguimiento-trackers/seguimiento-trackers.component';

@NgModule({
  imports: [
    CommonModule,
    TrackersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
  ],
  declarations: [SeguimientoTrackersComponent]
})
export class TrackersModule { }
