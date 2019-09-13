import {Tabla} from './tabla';

export class Grant{
    public tabla:Tabla;
    public rol:string;
    public permisos:string;


    public generarGrant(){
        let grantNuevo = "GRANT "+this.permisos+" ON "+this.definicionTabla(this.tabla)+" TO "+this.rol+";\n";
        return grantNuevo;
    }

    private definicionTabla(tabla:Tabla){
        return tabla.esquema+"."+tabla.nombreTabla;
      }

}