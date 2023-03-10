import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarFormularioComponent } from './enviar-formulario.component';

describe('EnviarFormularioComponent', () => {
  let component: EnviarFormularioComponent;
  let fixture: ComponentFixture<EnviarFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
