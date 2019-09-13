import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unique } from '../../modelos/bbdd/unique';
import { ForeignKey } from '../../modelos/bbdd/foreignKey';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  
  modalForm = new FormGroup({
    fkForm : new FormGroup({
      tablaDestino: new FormControl(null, [Validators.required]),
      campo: new FormControl(null, [Validators.required]),
    }),
    uniqueForm : new FormGroup({
      campos: new FormControl(),
    }),
  });

  private camposCargados: string[] = [];
  private estoyCargandoUnique: boolean = true;
  private indexTab: number;
  contadorUnique = 0;
  contadorFk = 0;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) data
    ) {

      let camposLocos = data.campos;

      for(let i = 1; i < camposLocos.length; i++){
        if(camposLocos[i].nombreCampo.length > 0 && !camposLocos[i].esPK){
          this.camposCargados.push(camposLocos[i].nombreCampo);
        }
      }
  }
    
  ngOnInit() {}

  losCamposNoEstanVacios():boolean {

    return this.camposCargados.length > 0;
  }

  tabSeleccionado(evento: MatTabChangeEvent){
    this.estoyCargandoUnique = (evento.tab.origin == 0);
    this.indexTab = evento.index;
  }

  @Output()
  guardar = new EventEmitter();

  guardandoListas() {
    let constraint;
    

    if(this.indexTab == 0 || this.estoyCargandoUnique){
      if(this.modalForm.controls.uniqueForm.value.campos.length > 0){
        if(this.modalForm.controls.uniqueForm.value.campos.length > 0){
          constraint = new Unique(this.modalForm.controls.uniqueForm.value);
          this.contadorUnique++;
        }
      }
    }else{

      if(this.modalForm.controls.fkForm.value.tablaDestino != null
          && this.modalForm.controls.fkForm.value.campo != null){
        let valorForm = this.modalForm.controls.fkForm.value;
        if (valorForm.tablaDestino.length > 0  && valorForm.campo.length > 0) {
          constraint = new ForeignKey(valorForm.tablaDestino);
          constraint.setCampo(valorForm.campo);
          this.contadorFk++;
        }
      }
    }
    
    this.guardar.emit(constraint);
  }  
}