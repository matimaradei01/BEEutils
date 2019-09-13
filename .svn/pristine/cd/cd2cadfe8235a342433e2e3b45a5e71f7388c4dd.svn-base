import { Injectable } from '@angular/core';
import {Tabla} from "../../../modelos/bbdd/tabla";
import { Aplicaciones } from '../../../shared/constantes/bbdd/aplicaciones.const';

@Injectable()
export class GeneradorGrantsService {

  private GRANT:string = "GRANT "; 
  private ON:string = " ON "; 
  private TO:string = " TO "; 
  private ENTER:string = "\n"; 

  constructor() {
    

  }

  generarGrants(tabla:Tabla){
    let grants = this.armarGrantsGenericos(tabla);
    grants += this.armarGrantsParaApp(tabla);

    return grants;
    
  }

  private armarGrantsGenericos(tabla:Tabla){
    let grants = this.GRANT+"SELECT"+this.ON+this.definicionTabla(tabla)+this.TO+Aplicaciones.ATINC.rol+";"+this.ENTER;

    if(tabla.tipoTabla == "Secuencia"){
      grants += this.GRANT+"SELECT"+this.ON+this.definicionTabla(tabla)+this.TO+Aplicaciones.SCRIPTRUN.rol+";"+this.ENTER;
    }else{
      grants += this.GRANT+"SELECT, UPDATE, DELETE, INSERT"+this.ON+this.definicionTabla(tabla)+this.TO+Aplicaciones.SCRIPTRUN.rol+";"+this.ENTER;
    }

    return grants;
  }
  
  private armarGrantsParaApp(tabla:Tabla){
    let grants = this.armarEstructuraGrant(tabla)+tabla.aplicacion+";"+this.ENTER;
    return grants;
  }

  private definicionTabla(tabla:Tabla){
    return tabla.esquema+"."+tabla.nombreTabla;
  }

  private armarEstructuraGrant(tabla:Tabla){
    return this.GRANT+this.permisosPorTipoTabla(tabla)+this.ON+this.definicionTabla(tabla)+this.TO;
  }

  private permisosPorTipoTabla(tabla:Tabla){

    let tipoTabla = tabla.tipoTabla;

    if(tipoTabla == "Configuracion"){
      return "SELECT";
    }else if(tipoTabla == "Transaccional"){
      return  "SELECT, UPDATE, INSERT";
    
    }else if(tipoTabla == "Consulta"){
      return "SELECT";
    
    }else if(tipoTabla == "Store Procedure"){
      return "EXECUTE";
    }else if(tipoTabla == "Log"){
      return "INSERT";
    }else if(tipoTabla == "Secuencia"){
      return "SELECT";
    }

    return "";
  }

}
