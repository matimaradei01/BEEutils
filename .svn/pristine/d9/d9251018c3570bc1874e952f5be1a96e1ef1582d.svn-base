import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ActivatedRoute } from '@angular/router';
import { Portapapeles } from '../../../modelos/shared/portapapeles';

@Component({
  selector: 'app-portapapeles',
  templateUrl: './portapapeles.component.html',
  styleUrls: ['./portapapeles.component.css']
})
export class PortapapelesComponent implements OnInit {

  contenido: Portapapeles;
  
  constructor(
    private _clipboardService:ClipboardService, 
    private activatedRoute: ActivatedRoute
    ) {
    this.activatedRoute.params.subscribe( params => {
      this.contenido = JSON.parse(params['contenido']);
    })
  }

  ngOnInit() {    
  }

  copiarAlPortapapeles(){
    this._clipboardService.copyFromContent(this.contenido.contenido);
  }

}
