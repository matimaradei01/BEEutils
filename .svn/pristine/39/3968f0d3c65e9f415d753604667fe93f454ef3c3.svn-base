import {Campo} from './campo';
import { Constraint } from './constraint';
import { Observable } from 'rxjs';

export class Tabla{

    public nombreTabla:string;
    public esquema:string;
    public aplicacion:string;
    public tipoTabla:string;
    public campos:Campo[];
    public comentario: string;
    public motor:string;
    public base:string;
    public constraints: Constraint[];

    constructor(tabla: Tabla) {
        this.nombreTabla = tabla.nombreTabla;
        this.esquema = tabla.esquema;
        this.aplicacion = tabla.aplicacion;
        this.tipoTabla = tabla.tipoTabla;
        this.campos = tabla.campos;
        this.comentario = tabla.comentario;
        this.motor = tabla.motor;
        this.base = tabla.base;
        this.constraints = tabla.constraints;
    }

    public armarNombreTabla(): string {
        if (this.motor == "Oracle") {
            return this.esquema + "." + this.nombreTabla;
        } else {
            return this.nombreTabla;
        }
    }

    public nombreIndicePK() {
        let nombreIndice = "";

        if (this.motor == "Oracle"){
            nombreIndice = this.esquema + ".PK_" + this.nombreTabla;
        }else{
            nombreIndice = "PK_" + this.nombreTabla;
        }
        
        return nombreIndice;
    }

    public nombreConstraintPK(){
        return this.armarNombreConstraint("CON_", this.nombreTabla, "_PK");
    }

    public nombreConstraintNN(nroCON) {
        return this.armarNombreConstraint("CON_", this.nombreTabla, "_" + nroCON + "_NN");
    }

    public nombreConstraintUQ(nroCON) {
        return this.armarNombreConstraint("CON_", this.nombreTabla, "_" + nroCON + "_UK");
    }

    private armarNombreConstraint(primeraParte, segundaParte, terceraParte) {

        let nombre = "";

        if ((primeraParte + segundaParte + terceraParte).length > 30) {
            nombre = primeraParte + this.sacarVocales(segundaParte) + terceraParte;
        } else {
            nombre = primeraParte + segundaParte + terceraParte;
        }

        return nombre;
    }

    private sacarVocales(unTexto) {
        let unTextoNuevo = unTexto.toUpperCase();
        unTextoNuevo = unTextoNuevo.replace(/[AEIOU]/gi, "");


        return unTextoNuevo;
    }

}
