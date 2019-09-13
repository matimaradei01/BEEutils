import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneradorGrantsComponent } from './generador-grants/generador-grants.component';
import { GeneradorCreateComponent } from './generador-create/generador-create.component';
import { PortapapelesComponent } from '../../shared/componentes/portapapeles/portapapeles.component';

const routes: Routes = [
  { path: 'grants', component: GeneradorGrantsComponent,
  children: [
    { path: 'resultadoGrants/:contenido', component: PortapapelesComponent}
  ]},
  {
    path: 'create', component: GeneradorCreateComponent,
  children: [
    { path: 'resultadoCreate/:contenido', component: PortapapelesComponent }
  ]},
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
export class BBDDRoutingModule { }
