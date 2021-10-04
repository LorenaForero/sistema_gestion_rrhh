import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPeticionesComponent } from './crear-peticiones.component';

describe('CrearPeticionesComponent', () => {
  let component: CrearPeticionesComponent;
  let fixture: ComponentFixture<CrearPeticionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPeticionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
