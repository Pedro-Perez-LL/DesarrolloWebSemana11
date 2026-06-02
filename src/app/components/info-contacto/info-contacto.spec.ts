import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContacto } from './info-contacto';

describe('InfoContacto', () => {
  let component: InfoContacto;
  let fixture: ComponentFixture<InfoContacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoContacto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoContacto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
