import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule , MatTabsModule , MatSelectModule , MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { ModalComponent } from '../modulos/modal/modal.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import{ ModalClavesGeneradasComponent } from '../modulos/modal-claves-generadas/modal-claves-generadas.component';
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ModalComponent, ModalClavesGeneradasComponent]
})
export class SharedModule { }
