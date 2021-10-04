import { Component, OnInit } from '@angular/core';
import { PeticionesServicioService } from 'src/app/servicios/peticiones-servicio.service';
import data from '../../../../assets/json/peticiones.json';


@Component({
  selector: 'app-lista-peticiones',
  templateUrl: './lista-peticiones.component.html',
  styleUrls: ['./lista-peticiones.component.css']
})
export class ListaPeticionesComponent implements OnInit {

  //constructor(private peticionServicio: PeticionesServicioService) { }
  constructor() { }
  listaPeticiones: any = [];

  ngOnInit(): void {
    this.consultarPeticiones(1);
  }

  consultarPeticiones(id: number) {
    this.listaPeticiones = data.data;
    //this.peticionServicio.getPeticiones(id).subscribe(data => this.listaPeticiones = data);
    console.log("lista", this.listaPeticiones)
  }

}
