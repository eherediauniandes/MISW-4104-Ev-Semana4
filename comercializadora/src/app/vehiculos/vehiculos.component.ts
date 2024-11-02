import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculosService } from './vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(private vehiculeService: VehiculosService) { }
  vehicles: Array<Vehiculo> = []

  getVehicles() {
    this.vehiculeService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
      console.log(this.vehicles);
    })
  }

  ngOnInit() {
    this.getVehicles();
  }

}
