import { Constraint } from "./constraint";
import { Tabla } from "./tabla";
import { Contador } from "./contador";

export class ForeignKey extends Constraint {

    private ENTER: string = "\n";
    private tablaDestino:string;
    private campo: string;

    constructor(tablaDestino: string) {
        super();

        this.tablaDestino = tablaDestino;
    }

    getCampo() {
        return this.campo;
    }

    getTablaDestino() {
        return this.tablaDestino;
    }

    public setCampo(campo: string){
        this.campo = campo;
    }

    sumarContador(contador: Contador){
        contador.sumarFK();
        return contador;
    }

    

    generarConstraint(tabla: Tabla, contador: Contador): string {

        let scriptConstraint = "ALTER TABLE " + tabla.nombreTabla
                + this.campo + this.ENTER + "FOREIGN KEY" 
                + " ("+this.campo+")" + " REFERENCES " + this.tablaDestino
                + "("+this.campo+");" + this.ENTER + "GO";

        return scriptConstraint.toUpperCase();

    }


}

