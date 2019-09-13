import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneradorGrantsComponent } from './generador-grants/generador-grants.component';
import { BBDDRoutingModule } from './bbdd-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { GeneradorCreateComponent } from './generador-create/generador-create.component';
import { SharedModule } from '../../shared/shared.module';
import { PortapapelesComponent } from '../../shared/componentes/portapapeles/portapapeles.component';

@NgModule({
  declarations: [
    GeneradorGrantsComponent,
    GeneradorCreateComponent,
    PortapapelesComponent
  ],
  imports: [
    CommonModule,
    BBDDRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    ClipboardModule,
    SharedModule,
  ],
  exports: [
    PortapapelesComponent,
  ]
})
export class BBDDModule{ }
