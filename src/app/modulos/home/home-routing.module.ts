import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneradorCreateComponent } from '../bbdd/generador-create/generador-create.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  //{ path: 'grants', component: GeneradorGrantsComponent},
  { path: 'home', component: HomeComponent },
  { path: 'create', component: GeneradorCreateComponent },  
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
export class HomeRoutingModule { }
