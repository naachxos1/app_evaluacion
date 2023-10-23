import { ComponentFixture, TestBed } from '@angular/core/testing';
import { seccionespage } from './secciones-p.page';

describe('SeccionPage', () => {
  let component: seccionespage;
  let fixture: ComponentFixture<seccionespage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(seccionespage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
