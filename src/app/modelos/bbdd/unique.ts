import { Constraint } from "./constraint";
import { Contador } from "./contador";
import {Tabla} from "../../modelos/bbdd/tabla";


export class Unique extends Constraint {
    
    
    private ENTER: string = "\n";
    private campos: string[];
    
    constructor(constraint: Unique) {
        super()
        this.campos = constraint.campos;
    }

    getCampo() {
        return this.campos;
    }
    
    obtenerCampos() {
        return '(' + this.campos.join() + ')';
    }

    sumarContador(contador: Contador){
        contador.sumarUQ();
        return contador;
    }
    
    generarConstraint(tabla: Tabla, contador: Contador): string {

        let numeroCon = (contador.getContadorUQ().toString().length < 2) ? "0" + contador.getContadorUQ() : contador.getContadorUQ();
        
        let scriptConstraint = "ALTER TABLE " +tabla.esquema+"."+ tabla.nombreTabla
                +   this.ENTER + "ADD CONSTRAINT "+tabla.nombreConstraintUQ(numeroCon) + " UNIQUE"
                +   this.obtenerCampos() + ';'
                +   this.ENTER + "GO";
        
        return scriptConstraint.toUpperCase();
    }
}