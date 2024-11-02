import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {

  constructor(private vehiculeService: VehiculosService) { }
  vehicles: Array<Vehiculo> = []
  vehiclesByMarca: {[marca:string]:number} = {}

  getVehicles() {
    this.vehiculeService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
      this.calculateVehiclesByMarca();
    })
  }

  calculateVehiclesByMarca() {
    this.vehiclesByMarca = {}; 
    if (this.vehicles.length === 0) {
      console.log('No se encontraron vehículos.'); // log
    }
    for (const vehicle of this.vehicles) {
      if (this.vehiclesByMarca[vehicle.marca]) {
        this.vehiclesByMarca[vehicle.marca]++;
      } else {
        this.vehiclesByMarca[vehicle.marca] = 1;
      }
    }
  }

  ngOnInit() {
    this.getVehicles();
  }

}
