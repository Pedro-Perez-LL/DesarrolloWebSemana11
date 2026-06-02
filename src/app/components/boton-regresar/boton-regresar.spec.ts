import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegresar } from './boton-regresar';

describe('BotonRegresar', () => {
  let component: BotonRegresar;
  let fixture: ComponentFixture<BotonRegresar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonRegresar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonRegresar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
