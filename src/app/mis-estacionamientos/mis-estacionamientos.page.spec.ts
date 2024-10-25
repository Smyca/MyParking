import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisEstacionamientosPage } from './mis-estacionamientos.page';

describe('MisEstacionamientosPage', () => {
  let component: MisEstacionamientosPage;
  let fixture: ComponentFixture<MisEstacionamientosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEstacionamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
