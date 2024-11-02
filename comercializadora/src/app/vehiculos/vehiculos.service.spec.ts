/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { VehiculosService } from './vehiculos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Vehiculo } from './vehiculo';
import { environment } from '../../environments/environment.development';

describe('Service: Vehiculos', () => {
  let service: VehiculosService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculosService]
    });
    service = TestBed.inject(VehiculosService)
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should fetch vehicles from the API', () => {
    const mockVehicles: Vehiculo[] = [
      { id: 1, marca: 'Toyota', linea: 'Corolla', referencia: 'A1', modelo: 2021, kilometraje: 10000, color: 'Rojo', imagen: 'imagen1.png' },
      { id: 2, marca: 'Honda', linea: 'Civic', referencia: 'B2', modelo: 2020, kilometraje: 15000, color: 'Azul', imagen: 'imagen2.png' }
    ];

    service.getVehicles().subscribe((vehicles) => {
      expect(vehicles.length).toBe(2); // Verifica que se reciban dos vehículos
      expect(vehicles).toEqual(mockVehicles); // Verifica que los vehículos sean los esperados
    });

    const req = httpMock.expectOne(apiUrl); // Espera una solicitud a la API
    expect(req.request.method).toBe('GET'); // Verifica que sea un método GET
    req.flush(mockVehicles); // Simula la respuesta de la API
  });

  it('should ...', inject([VehiculosService], (service: VehiculosService) => {
    expect(service).toBeTruthy();
  }));
});
