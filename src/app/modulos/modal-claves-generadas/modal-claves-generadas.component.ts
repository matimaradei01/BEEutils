import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unique } from '../../modelos/bbdd/unique';
import { ForeignKey } from '../../modelos/bbdd/foreignKey';
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { MatTabChangeEvent } from '@angular/material';

export interface UniqueElement {
  campos: string[];
  position: number;
}

export interface FkElement {
  campo: string;
  tablaDestino: string;
  position: number;
}

@Component({
  selector: 'app-modal-claves-generadas',
  templateUrl: './modal-claves-generadas.component.html',
  styleUrls: ['./modal-claves-generadas.component.css']
  
})
export class ModalClavesGeneradasComponent implements OnInit {

  private constraintsCargadas: any = [];
  private constraintsUnique: Unique[] = [];
  private constraintsForeignKey: ForeignKey[] = [];
  private dataSource;
  private selection;
  private displayedColumnsUnique: string[] = ['select', 'position', 'campos'];
  private displayedColumnsFk: string[] = ['select', 'position', 'campo', 'tablaDestino'];
  private dataUnique: UniqueElement[] = [];
  private dataFk: FkElement[] = [];
  private nuevasConstraints: any[] = [];

  constructor(private dialogRef: MatDialogRef<ModalClavesGeneradasComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) { 
      
      this.constraintsCargadas = data.constraint;      
      this.separandoCamposPorConstraint();
    }

  ngOnInit() {
    
    this.constraintsUnique.forEach((value,index)=>{
      this.dataUnique.push({
        'position': index,
        'campos': value.getCampo(),
      });
    })

    this.constraintsForeignKey.forEach((value,index)=>{
      this.dataFk.push({
        'position': index,
        'campo': value.getCampo(),
        'tablaDestino': value.getTablaDestino(),
      });
    })     

    this.dataSource = new MatTableDataSource<UniqueElement>(this.dataUnique);
    this.selection = new SelectionModel<UniqueElement>(true, []);
  }

  tabSeleccionado(event: MatTabChangeEvent): void {
    this.cargarDatosEnModal(event.index);
  }

  cargarDatosEnModal(index: number): void {
    if ( index == 1 ) {
      this.dataSource = new MatTableDataSource<FkElement>(this.dataFk);
      this.selection = new SelectionModel<FkElement>(true, []);
    } else {
      this.dataSource = new MatTableDataSource<UniqueElement>(this.dataUnique);
      this.selection = new SelectionModel<UniqueElement>(true, []);
    }
  }

  separandoCamposPorConstraint(){
      for(let i=0 ; i<this.constraintsCargadas.length ; i++) {
        if(this.constraintsCargadas[i].campos){
          this.constraintsUnique.push(this.constraintsCargadas[i]);
        }else{
          this.constraintsForeignKey.push(this.constraintsCargadas[i]);
      }
    }
  }

  queNoEsteVacioLasConstraintFK():boolean {
    return this.constraintsForeignKey.length > 0;
  }

  queNoEsteVacioLasConstraintUnique():boolean {
    return this.constraintsUnique.length > 0;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    if (numRows != undefined && numSelected != undefined) {
      return numSelected === numRows;
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    } else {      
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position}`;
    }
  }

  borrarClave() {
    this.selection.selected.forEach( clave => {
      this.dataSource.data.splice( clave.position , 1 );
      if ( clave.campos ) {
        this.constraintsUnique.splice( clave.position , 1 );
      } else if ( clave.campo ) {
        this.constraintsForeignKey.splice( clave.position , 1 );
      }
      this.dataSource.data.forEach( (element,index) => {
        element.position = index;
      });     
      this.dataSource._updateChangeSubscription();
    });
    this.selection.clear();   
  }  
    
  retornarConstraint() {
    this.nuevasConstraints = this.nuevasConstraints.concat(this.constraintsUnique,this.constraintsForeignKey);
    this.dialogRef.close({
      'claves' : this.nuevasConstraints,
    });        
  }
}