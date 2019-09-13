import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Tabla} from "../../../modelos/bbdd/tabla";
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {GeneradorGrantsService} from '../../../services/bbdd/generador-grants/generador-grants.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Portapapeles } from '../../../modelos/shared/portapapeles';
import { Aplicaciones } from '../../../shared/constantes/bbdd/aplicaciones.const';
import { Aplicacion } from '../../../modelos/bbdd/aplicacion';

@Component({
  templateUrl: './generador-grants.component.html',
  styleUrls: ['./generador-grants.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GeneradorGrantsComponent implements OnInit {
  
  esquemas:string[] = ["USR_BEE", "USR_BEE_LOG", "USR_LINK"];
  tiposDeTablas:string[]= ["Configuracion", "Transaccional", "Consulta", "Log", "Secuencia"];
  aplicaciones:Aplicacion[] = [Aplicaciones.BEE, Aplicaciones.BO, Aplicaciones.BATCH];

  grantForm = new FormGroup({
    esquema: new FormControl(this.esquemas[0]),
    nombreTabla: new FormControl(null, [Validators.required]),
    tipoTabla: new FormControl(this.tiposDeTablas[0]),
    aplicacion: new FormControl(Aplicaciones.BEE.rol)
  });

  get nombreTabla(){return this.grantForm.get("nombreTabla")};

  constructor(
    private _generadorGrantsService:GeneradorGrantsService, 
    private _router: Router, 
    private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
  }

  generarGrants(){
    if(this.grantForm.valid){
      let tabla:Tabla = this.grantForm.value;
      let grants = this._generadorGrantsService.generarGrants(tabla);

      let contenidoPortapeles = new Portapapeles(grants, "Habemus Grants!");

      this._router.navigate(
        ['resultadoGrants', JSON.stringify(contenidoPortapeles)], 
        { relativeTo: this.activatedRoute, skipLocationChange: true }
      );
    }
  }

}
