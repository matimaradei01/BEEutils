import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-seguimiento-trackers',
  templateUrl: './seguimiento-trackers.component.html',
  styleUrls: ['./seguimiento-trackers.component.css']
})
export class SeguimientoTrackersComponent implements OnInit {

  busquedaTrackersForm = new FormGroup({
    busqueda: new FormControl(null, [Validators.required])
  });

  get busqueda(){return this.busquedaTrackersForm.get("busqueda")};

  constructor() { }

  ngOnInit() {
  }

  buscarProyecto(){
    console.log("hola");
  }

}
