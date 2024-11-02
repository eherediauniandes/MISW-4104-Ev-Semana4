/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo';
import { VehiculosListComponent } from './vehiculos-list.component';

describe('VehiculosListComponent', () => {
  let component: VehiculosListComponent;
  let fixture: ComponentFixture<VehiculosListComponent>;
  let mockVehiculosService: VehiculosService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ], 
      declarations: [ VehiculosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosListComponent);
    component = fixture.componentInstance;
    mockVehiculosService = TestBed.inject(VehiculosService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with headers and vehicles', () => {
    const mockVehicles: Vehiculo[] = [
      { id: 1, marca: 'Toyota', linea: 'Corolla', referencia: 'A1', modelo: 2021, kilometraje: 10000, color: 'Rojo', imagen: 'imagen1.png' },
      { id: 2, marca: 'Toyota', linea: 'Prado', referencia: 'B2', modelo: 2020, kilometraje: 15000, color: 'Azul', imagen: 'imagen2.png' },
      { id: 3, marca: 'Toyota', linea: 'FJ', referencia: 'C3', modelo: 2019, kilometraje: 20000, color: 'Verde', imagen: 'imagen3.png' }
    ];

    spyOn(mockVehiculosService,"getVehicles").and.returnValue(of(mockVehicles));

    component.ngOnInit(); 

    fixture.detectChanges(); 

    const compiled = fixture.nativeElement;
    
    expect(compiled.querySelector('th.h4:nth-child(1)').textContent).toContain('#');
    expect(compiled.querySelector('th.h4:nth-child(2)').textContent).toContain('Marca');
    expect(compiled.querySelector('th.h4:nth-child(3)').textContent).toContain('Línea');
    expect(compiled.querySelector('th.h4:nth-child(4)').textContent).toContain('Modelo');

    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3); 
    expect(rows[0].querySelector('td').textContent).toContain('1'); 
    expect(rows[0].querySelector('td:nth-child(2)').textContent).toContain('Toyota');
  });
});
